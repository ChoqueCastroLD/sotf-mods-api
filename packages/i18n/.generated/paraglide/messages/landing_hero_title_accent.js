/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Hero_Title_AccentInputs */

const en_landing_hero_title_accent = /** @type {(inputs: Landing_Hero_Title_AccentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Field-tested.`)
};

const es_landing_hero_title_accent = /** @type {(inputs: Landing_Hero_Title_AccentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Probados en el terreno.`)
};

const de_landing_hero_title_accent = /** @type {(inputs: Landing_Hero_Title_AccentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Im Feld getestet.`)
};

const fr_landing_hero_title_accent = /** @type {(inputs: Landing_Hero_Title_AccentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Testés sur le terrain.`)
};

const it_landing_hero_title_accent = /** @type {(inputs: Landing_Hero_Title_AccentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Collaudate sul campo.`)
};

const nl_landing_hero_title_accent = /** @type {(inputs: Landing_Hero_Title_AccentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In het veld getest.`)
};

const pl_landing_hero_title_accent = /** @type {(inputs: Landing_Hero_Title_AccentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sprawdzone w terenie.`)
};

const pt_landing_hero_title_accent = /** @type {(inputs: Landing_Hero_Title_AccentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Testados em campo.`)
};

const ru_landing_hero_title_accent = /** @type {(inputs: Landing_Hero_Title_AccentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Проверено в полевых условиях.`)
};

const sv_landing_hero_title_accent = /** @type {(inputs: Landing_Hero_Title_AccentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Testade i fält.`)
};

const tr_landing_hero_title_accent = /** @type {(inputs: Landing_Hero_Title_AccentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sahada test edildi.`)
};

const zh_landing_hero_title_accent = /** @type {(inputs: Landing_Hero_Title_AccentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`经过实地检验。`)
};

const ja_landing_hero_title_accent = /** @type {(inputs: Landing_Hero_Title_AccentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`現地でテスト済み。`)
};

/**
* | output |
* | --- |
* | "Field-tested." |
*
* @param {Landing_Hero_Title_AccentInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_hero_title_accent = /** @type {((inputs?: Landing_Hero_Title_AccentInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Hero_Title_AccentInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_hero_title_accent(inputs)
	if (locale === "de") return de_landing_hero_title_accent(inputs)
	if (locale === "fr") return fr_landing_hero_title_accent(inputs)
	if (locale === "it") return it_landing_hero_title_accent(inputs)
	if (locale === "nl") return nl_landing_hero_title_accent(inputs)
	if (locale === "pl") return pl_landing_hero_title_accent(inputs)
	if (locale === "pt") return pt_landing_hero_title_accent(inputs)
	if (locale === "ru") return ru_landing_hero_title_accent(inputs)
	if (locale === "sv") return sv_landing_hero_title_accent(inputs)
	if (locale === "tr") return tr_landing_hero_title_accent(inputs)
	if (locale === "zh") return zh_landing_hero_title_accent(inputs)
	if (locale === "ja") return ja_landing_hero_title_accent(inputs)
	return en_landing_hero_title_accent(inputs)
});
