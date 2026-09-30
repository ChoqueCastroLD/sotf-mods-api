/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Category_Intro_GameplayInputs */

const en_explore_category_intro_gameplay = /** @type {(inputs: Explore_Category_Intro_GameplayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods that change how the game plays: difficulty, combat, enemies, survival rules and new mechanics.`)
};

const es_explore_category_intro_gameplay = /** @type {(inputs: Explore_Category_Intro_GameplayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods que cambian cómo se juega: dificultad, combate, enemigos, reglas de supervivencia y mecánicas nuevas.`)
};

const de_explore_category_intro_gameplay = /** @type {(inputs: Explore_Category_Intro_GameplayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods, die das Spielgefühl verändern: Schwierigkeit, Kampf, Gegner, Überlebensregeln und neue Mechaniken.`)
};

const fr_explore_category_intro_gameplay = /** @type {(inputs: Explore_Category_Intro_GameplayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Des mods qui changent la façon de jouer : difficulté, combat, ennemis, règles de survie et nouvelles mécaniques.`)
};

const it_explore_category_intro_gameplay = /** @type {(inputs: Explore_Category_Intro_GameplayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod che cambiano il modo di giocare: difficoltà, combattimento, nemici, regole di sopravvivenza e nuove meccaniche.`)
};

const nl_explore_category_intro_gameplay = /** @type {(inputs: Explore_Category_Intro_GameplayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods die veranderen hoe het spel speelt: moeilijkheid, gevechten, vijanden, overlevingsregels en nieuwe mechanieken.`)
};

const pl_explore_category_intro_gameplay = /** @type {(inputs: Explore_Category_Intro_GameplayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mody, które zmieniają rozgrywkę: poziom trudności, walkę, wrogów, zasady przetrwania i nowe mechaniki.`)
};

const pt_explore_category_intro_gameplay = /** @type {(inputs: Explore_Category_Intro_GameplayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods que mudam o jeito de jogar: dificuldade, combate, inimigos, regras de sobrevivência e novas mecânicas.`)
};

const ru_explore_category_intro_gameplay = /** @type {(inputs: Explore_Category_Intro_GameplayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Моды, меняющие сам игровой процесс: сложность, бой, враги, правила выживания и новые механики.`)
};

const sv_explore_category_intro_gameplay = /** @type {(inputs: Explore_Category_Intro_GameplayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moddar som ändrar hur spelet spelas: svårighet, strid, fiender, överlevnadsregler och ny mekanik.`)
};

const tr_explore_category_intro_gameplay = /** @type {(inputs: Explore_Category_Intro_GameplayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oyunun oynanışını değiştiren modlar: zorluk, dövüş, düşmanlar, hayatta kalma kuralları ve yeni mekanikler.`)
};

const zh_explore_category_intro_gameplay = /** @type {(inputs: Explore_Category_Intro_GameplayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`改变游戏玩法的模组：难度、战斗、敌人、生存规则和新机制。`)
};

const ja_explore_category_intro_gameplay = /** @type {(inputs: Explore_Category_Intro_GameplayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`難易度、戦闘、敵、サバイバルのルール、新しい仕組みなど、遊び方そのものを変える MOD。`)
};

/**
* | output |
* | --- |
* | "Mods that change how the game plays: difficulty, combat, enemies, survival rules and new mechanics." |
*
* @param {Explore_Category_Intro_GameplayInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_category_intro_gameplay = /** @type {((inputs?: Explore_Category_Intro_GameplayInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Category_Intro_GameplayInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_category_intro_gameplay(inputs)
	if (locale === "de") return de_explore_category_intro_gameplay(inputs)
	if (locale === "fr") return fr_explore_category_intro_gameplay(inputs)
	if (locale === "it") return it_explore_category_intro_gameplay(inputs)
	if (locale === "nl") return nl_explore_category_intro_gameplay(inputs)
	if (locale === "pl") return pl_explore_category_intro_gameplay(inputs)
	if (locale === "pt") return pt_explore_category_intro_gameplay(inputs)
	if (locale === "ru") return ru_explore_category_intro_gameplay(inputs)
	if (locale === "sv") return sv_explore_category_intro_gameplay(inputs)
	if (locale === "tr") return tr_explore_category_intro_gameplay(inputs)
	if (locale === "zh") return zh_explore_category_intro_gameplay(inputs)
	if (locale === "ja") return ja_explore_category_intro_gameplay(inputs)
	return en_explore_category_intro_gameplay(inputs)
});
