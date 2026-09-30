/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ build: NonNullable<unknown>, works: NonNullable<unknown>, partial: NonNullable<unknown>, broken: NonNullable<unknown> }} Basecamp_Compat_CurrentInputs */

const en_basecamp_compat_current = /** @type {(inputs: Basecamp_Compat_CurrentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Game build ${i?.build}: ${i?.works} works, ${i?.partial} partial, ${i?.broken} broken`)
};

const es_basecamp_compat_current = /** @type {(inputs: Basecamp_Compat_CurrentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Build ${i?.build} del juego: ${i?.works} funciona, ${i?.partial} parcial, ${i?.broken} roto`)
};

const de_basecamp_compat_current = /** @type {(inputs: Basecamp_Compat_CurrentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Spiel-Build ${i?.build}: ${i?.works} funktioniert, ${i?.partial} teilweise, ${i?.broken} kaputt`)
};

const fr_basecamp_compat_current = /** @type {(inputs: Basecamp_Compat_CurrentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Build ${i?.build} du jeu : ${i?.works} fonctionne, ${i?.partial} partiel, ${i?.broken} cassé`)
};

const it_basecamp_compat_current = /** @type {(inputs: Basecamp_Compat_CurrentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Build ${i?.build} del gioco: ${i?.works} funziona, ${i?.partial} parziale, ${i?.broken} non funziona`)
};

const nl_basecamp_compat_current = /** @type {(inputs: Basecamp_Compat_CurrentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Gamebuild ${i?.build}: ${i?.works} werkt, ${i?.partial} gedeeltelijk, ${i?.broken} kapot`)
};

const pl_basecamp_compat_current = /** @type {(inputs: Basecamp_Compat_CurrentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Build gry ${i?.build}: działa ${i?.works}, częściowo ${i?.partial}, nie działa ${i?.broken}`)
};

const pt_basecamp_compat_current = /** @type {(inputs: Basecamp_Compat_CurrentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Build ${i?.build} do jogo: ${i?.works} funciona, ${i?.partial} parcial, ${i?.broken} quebrado`)
};

const ru_basecamp_compat_current = /** @type {(inputs: Basecamp_Compat_CurrentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Билд игры ${i?.build}: работает ${i?.works}, частично ${i?.partial}, не работает ${i?.broken}`)
};

const sv_basecamp_compat_current = /** @type {(inputs: Basecamp_Compat_CurrentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Spelbuild ${i?.build}: ${i?.works} fungerar, ${i?.partial} delvis, ${i?.broken} trasig`)
};

const tr_basecamp_compat_current = /** @type {(inputs: Basecamp_Compat_CurrentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Oyun sürümü ${i?.build}: ${i?.works} çalışıyor, ${i?.partial} kısmen, ${i?.broken} bozuk`)
};

const zh_basecamp_compat_current = /** @type {(inputs: Basecamp_Compat_CurrentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`游戏版本 ${i?.build}：${i?.works} 可用，${i?.partial} 部分可用，${i?.broken} 损坏`)
};

const ja_basecamp_compat_current = /** @type {(inputs: Basecamp_Compat_CurrentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`ゲームビルド ${i?.build}：動作 ${i?.works}、一部動作 ${i?.partial}、動作しない ${i?.broken}`)
};

/**
* | output |
* | --- |
* | "Game build {build}: {works} works, {partial} partial, {broken} broken" |
*
* @param {Basecamp_Compat_CurrentInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_compat_current = /** @type {((inputs: Basecamp_Compat_CurrentInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Compat_CurrentInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_compat_current(inputs)
	if (locale === "de") return de_basecamp_compat_current(inputs)
	if (locale === "fr") return fr_basecamp_compat_current(inputs)
	if (locale === "it") return it_basecamp_compat_current(inputs)
	if (locale === "nl") return nl_basecamp_compat_current(inputs)
	if (locale === "pl") return pl_basecamp_compat_current(inputs)
	if (locale === "pt") return pt_basecamp_compat_current(inputs)
	if (locale === "ru") return ru_basecamp_compat_current(inputs)
	if (locale === "sv") return sv_basecamp_compat_current(inputs)
	if (locale === "tr") return tr_basecamp_compat_current(inputs)
	if (locale === "zh") return zh_basecamp_compat_current(inputs)
	if (locale === "ja") return ja_basecamp_compat_current(inputs)
	return en_basecamp_compat_current(inputs)
});
