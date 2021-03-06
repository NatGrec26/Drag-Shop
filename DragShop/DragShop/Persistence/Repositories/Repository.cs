﻿using DragShop.Core.Repositories;
using DragShop.DbContext;
using DragShop.Dtos;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace DragShop.Persistence.Repositories
{
    public abstract class Repository<TEntity> : IRepository<TEntity> where TEntity : class
    {
        protected readonly ApplicationDbContext Context;

        public Repository(ApplicationDbContext context) => Context = context;

        public virtual async Task<bool> AnyAsync(Expression<Func<TEntity, bool>> predicate)
            => await Context.Set<TEntity>().AnyAsync(predicate);

        public IImmutableList<ErrorDto> CreateDefaultError(string statusCode, string errorMessage, string errorCode)
        {
            return ImmutableList.Create(new ErrorDto
            {
                StatusCode = statusCode,
                ErrorMessage = errorMessage,
                ErrorCode = errorCode
            });
        }

        public virtual TEntity Get(int id) => Context.Set<TEntity>().Find(id);
        public virtual async Task<TEntity> GetAsync(int id) => await Context.Set<TEntity>().FindAsync(id);

        public virtual IEnumerable<TEntity> GetAll() => GetAllAsync().GetAwaiter().GetResult();
        public virtual async Task<IEnumerable<TEntity>> GetAllAsync() => await Context.Set<TEntity>().ToListAsync();

        public virtual IEnumerable<TEntity> Find(Expression<Func<TEntity, bool>> predicate) => Context.Set<TEntity>().Where(predicate);

        public virtual async Task<TEntity> FirstOrDefaultAsync() => await Context.Set<TEntity>().FirstOrDefaultAsync();
        public virtual async Task<TEntity> FirstOrDefaultAsync(Expression<Func<TEntity, bool>> predicate) => await Context.Set<TEntity>().FirstOrDefaultAsync(predicate);

        public virtual TEntity SingleOrDefault(Expression<Func<TEntity, bool>> predicate) => Context.Set<TEntity>().SingleOrDefault(predicate);
        public virtual Task<TEntity> SingleOrDefaultAsync(Expression<Func<TEntity, bool>> predicate) => Context.Set<TEntity>().SingleOrDefaultAsync(predicate);

        public virtual void Add(TEntity entity) => Context.Set<TEntity>().Add(entity);
        public virtual Task AddAsync(TEntity entity) => Context.Set<TEntity>().AddAsync(entity);

        public virtual void AddRange(IEnumerable<TEntity> entities) => Context.Set<TEntity>().AddRange(entities);
        public virtual Task AddRangeAsync(IEnumerable<TEntity> entities) => Context.Set<TEntity>().AddRangeAsync(entities);

        public virtual void Update(TEntity entity) => Context.Set<TEntity>().Update(entity);
        public virtual void UpdateRange(IEnumerable<TEntity> entities) => Context.Set<TEntity>().UpdateRange(entities);

        public virtual void Remove(TEntity entity) => Context.Set<TEntity>().Remove(entity);
        public virtual void RemoveRange(IEnumerable<TEntity> entities) => Context.Set<TEntity>().RemoveRange(entities);
    }
}