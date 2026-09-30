/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Nsfw_TitleInputs */

const en_mod_nsfw_title = /** @type {(inputs: Mod_Nsfw_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adult content`)
};

const es_mod_nsfw_title = /** @type {(inputs: Mod_Nsfw_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contenido para adultos`)
};

const de_mod_nsfw_title = /** @type {(inputs: Mod_Nsfw_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inhalte für Erwachsene`)
};

const fr_mod_nsfw_title = /** @type {(inputs: Mod_Nsfw_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contenu pour adultes`)
};

const it_mod_nsfw_title = /** @type {(inputs: Mod_Nsfw_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contenuti per adulti`)
};

const nl_mod_nsfw_title = /** @type {(inputs: Mod_Nsfw_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inhoud voor volwassenen`)
};

const pl_mod_nsfw_title = /** @type {(inputs: Mod_Nsfw_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Treści dla dorosłych`)
};

const pt_mod_nsfw_title = /** @type {(inputs: Mod_Nsfw_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conteúdo adulto`)
};

const ru_mod_nsfw_title = /** @type {(inputs: Mod_Nsfw_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Контент для взрослых`)
};

const sv_mod_nsfw_title = /** @type {(inputs: Mod_Nsfw_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vuxeninnehåll`)
};

const tr_mod_nsfw_title = /** @type {(inputs: Mod_Nsfw_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yetişkin içerik`)
};

const zh_mod_nsfw_title = /** @type {(inputs: Mod_Nsfw_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`成人内容`)
};

const ja_mod_nsfw_title = /** @type {(inputs: Mod_Nsfw_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`成人向けコンテンツ`)
};

/**
* | output |
* | --- |
* | "Adult content" |
*
* @param {Mod_Nsfw_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_nsfw_title = /** @type {((inputs?: Mod_Nsfw_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Nsfw_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_nsfw_title(inputs)
	if (locale === "de") return de_mod_nsfw_title(inputs)
	if (locale === "fr") return fr_mod_nsfw_title(inputs)
	if (locale === "it") return it_mod_nsfw_title(inputs)
	if (locale === "nl") return nl_mod_nsfw_title(inputs)
	if (locale === "pl") return pl_mod_nsfw_title(inputs)
	if (locale === "pt") return pt_mod_nsfw_title(inputs)
	if (locale === "ru") return ru_mod_nsfw_title(inputs)
	if (locale === "sv") return sv_mod_nsfw_title(inputs)
	if (locale === "tr") return tr_mod_nsfw_title(inputs)
	if (locale === "zh") return zh_mod_nsfw_title(inputs)
	if (locale === "ja") return ja_mod_nsfw_title(inputs)
	return en_mod_nsfw_title(inputs)
});
