/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Compat_TestedInputs */

const en_basecamp_compat_tested = /** @type {(inputs: Basecamp_Compat_TestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tested game builds`)
};

const es_basecamp_compat_tested = /** @type {(inputs: Basecamp_Compat_TestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Builds del juego probadas`)
};

const de_basecamp_compat_tested = /** @type {(inputs: Basecamp_Compat_TestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Getestete Spiel-Builds`)
};

const fr_basecamp_compat_tested = /** @type {(inputs: Basecamp_Compat_TestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Builds du jeu testés`)
};

const it_basecamp_compat_tested = /** @type {(inputs: Basecamp_Compat_TestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build del gioco testate`)
};

const nl_basecamp_compat_tested = /** @type {(inputs: Basecamp_Compat_TestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geteste gamebuilds`)
};

const pl_basecamp_compat_tested = /** @type {(inputs: Basecamp_Compat_TestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przetestowane buildy gry`)
};

const pt_basecamp_compat_tested = /** @type {(inputs: Basecamp_Compat_TestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Builds do jogo testadas`)
};

const ru_basecamp_compat_tested = /** @type {(inputs: Basecamp_Compat_TestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Проверенные билды игры`)
};

const sv_basecamp_compat_tested = /** @type {(inputs: Basecamp_Compat_TestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Testade spelbuilds`)
};

const tr_basecamp_compat_tested = /** @type {(inputs: Basecamp_Compat_TestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Test edilen oyun sürümleri`)
};

const zh_basecamp_compat_tested = /** @type {(inputs: Basecamp_Compat_TestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已测试的游戏版本`)
};

const ja_basecamp_compat_tested = /** @type {(inputs: Basecamp_Compat_TestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`動作確認したゲームビルド`)
};

/**
* | output |
* | --- |
* | "Tested game builds" |
*
* @param {Basecamp_Compat_TestedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_compat_tested = /** @type {((inputs?: Basecamp_Compat_TestedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Compat_TestedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_compat_tested(inputs)
	if (locale === "de") return de_basecamp_compat_tested(inputs)
	if (locale === "fr") return fr_basecamp_compat_tested(inputs)
	if (locale === "it") return it_basecamp_compat_tested(inputs)
	if (locale === "nl") return nl_basecamp_compat_tested(inputs)
	if (locale === "pl") return pl_basecamp_compat_tested(inputs)
	if (locale === "pt") return pt_basecamp_compat_tested(inputs)
	if (locale === "ru") return ru_basecamp_compat_tested(inputs)
	if (locale === "sv") return sv_basecamp_compat_tested(inputs)
	if (locale === "tr") return tr_basecamp_compat_tested(inputs)
	if (locale === "zh") return zh_basecamp_compat_tested(inputs)
	if (locale === "ja") return ja_basecamp_compat_tested(inputs)
	return en_basecamp_compat_tested(inputs)
});
