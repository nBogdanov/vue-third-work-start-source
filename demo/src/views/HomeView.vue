<template lang="">
  <div>
    <main class="content">
      <section class="desk">
        <!--Шапка доски-->
        <div class="desk__header">
          <h1 class="desk__title">Design Coffe Lab</h1>
          <div class="desk__filters">
            <div class="desk__user-filter">
              <!--Список пользователей-->
              <ul class="user-filter">
                <li class="user-filter__item">
                  <a class="user-filter__button">
                    <img
                      src=""
                      alt="Аватар пользователя"
                      width="24"
                      heigth="24"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div class="desk__meta-filter">
              <!--Список статусов-->
              <ul class="meta-filter">
                <li class="meta-filter__item">
                  <a class="meta-filter__status" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!--Колонки и задачи-->
        <div class="desk__columns">
          <div class="column">
            <h2 class="column__name">Название колонки</h2>
            <div class="column__target-area">
              <!--Задачи -->
              <div class="column__task">
                <div class="task">
                  <div class="task__user">
                    <div class="task__avatar">
                      <img src="" alt="Задача" width="20" heigth="20" />
                    </div>
                    Пользователь задачи
                  </div>

                  <div class="task__statuses">
                    <span class="task__status" />
                    <span class="task__status" />
                  </div>
                  <h5 class="task__title">Наименование задачи</h5>
                  <ul class="task__tags">
                    <li>
                      <span class="tag tag--blue"> Тег задачи </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--Пустая доска-->
        <p class="desk__emptiness">Пока нет ни одной колонки</p>
      </section>
    </main>
  </div>
</template>
<script>
export default {};
</script>
<style lang=""></style>
