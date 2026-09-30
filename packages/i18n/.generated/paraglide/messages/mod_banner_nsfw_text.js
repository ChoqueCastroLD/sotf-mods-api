/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Banner_Nsfw_TextInputs */

const en_mod_banner_nsfw_text = /** @type {(inputs: Mod_Banner_Nsfw_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This mod contains adult content.`)
};

const es_mod_banner_nsfw_text = /** @type {(inputs: Mod_Banner_Nsfw_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este mod tiene contenido para adultos.`)
};

const de_mod_banner_nsfw_text = /** @type {(inputs: Mod_Banner_Nsfw_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dieser Mod enthält Inhalte für Erwachsene.`)
};

const fr_mod_banner_nsfw_text = /** @type {(inputs: Mod_Banner_Nsfw_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce mod contient du contenu pour adultes.`)
};

const it_mod_banner_nsfw_text = /** @type {(inputs: Mod_Banner_Nsfw_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questa mod contiene contenuti per adulti.`)
};

const nl_mod_banner_nsfw_text = /** @type {(inputs: Mod_Banner_Nsfw_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deze mod bevat inhoud voor volwassenen.`)
};

const pl_mod_banner_nsfw_text = /** @type {(inputs: Mod_Banner_Nsfw_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ten mod zawiera treści dla dorosłych.`)
};

const pt_mod_banner_nsfw_text = /** @type {(inputs: Mod_Banner_Nsfw_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este mod tem conteúdo adulto.`)
};

const ru_mod_banner_nsfw_text = /** @type {(inputs: Mod_Banner_Nsfw_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`В этом моде есть контент для взрослых.`)
};

const sv_mod_banner_nsfw_text = /** @type {(inputs: Mod_Banner_Nsfw_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den här moden innehåller vuxeninnehåll.`)
};

const tr_mod_banner_nsfw_text = /** @type {(inputs: Mod_Banner_Nsfw_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu mod yetişkin içerik barındırıyor.`)
};

const zh_mod_banner_nsfw_text = /** @type {(inputs: Mod_Banner_Nsfw_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此模组包含成人内容。`)
};

const ja_mod_banner_nsfw_text = /** @type {(inputs: Mod_Banner_Nsfw_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この MOD には成人向けコンテンツが含まれます。`)
};

/**
* | output |
* | --- |
* | "This mod contains adult content." |
*
* @param {Mod_Banner_Nsfw_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_banner_nsfw_text = /** @type {((inputs?: Mod_Banner_Nsfw_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Banner_Nsfw_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_banner_nsfw_text(inputs)
	if (locale === "de") return de_mod_banner_nsfw_text(inputs)
	if (locale === "fr") return fr_mod_banner_nsfw_text(inputs)
	if (locale === "it") return it_mod_banner_nsfw_text(inputs)
	if (locale === "nl") return nl_mod_banner_nsfw_text(inputs)
	if (locale === "pl") return pl_mod_banner_nsfw_text(inputs)
	if (locale === "pt") return pt_mod_banner_nsfw_text(inputs)
	if (locale === "ru") return ru_mod_banner_nsfw_text(inputs)
	if (locale === "sv") return sv_mod_banner_nsfw_text(inputs)
	if (locale === "tr") return tr_mod_banner_nsfw_text(inputs)
	if (locale === "zh") return zh_mod_banner_nsfw_text(inputs)
	if (locale === "ja") return ja_mod_banner_nsfw_text(inputs)
	return en_mod_banner_nsfw_text(inputs)
});
