/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Mod_Versions_CaptionInputs */

const en_mod_versions_caption = /** @type {(inputs: Mod_Versions_CaptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Versions of ${i?.name}`)
};

const es_mod_versions_caption = /** @type {(inputs: Mod_Versions_CaptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Versiones de ${i?.name}`)
};

const de_mod_versions_caption = /** @type {(inputs: Mod_Versions_CaptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Versionen von ${i?.name}`)
};

const fr_mod_versions_caption = /** @type {(inputs: Mod_Versions_CaptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Versions de ${i?.name}`)
};

const it_mod_versions_caption = /** @type {(inputs: Mod_Versions_CaptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Versioni di ${i?.name}`)
};

const nl_mod_versions_caption = /** @type {(inputs: Mod_Versions_CaptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Versies van ${i?.name}`)
};

const pl_mod_versions_caption = /** @type {(inputs: Mod_Versions_CaptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wersje ${i?.name}`)
};

const pt_mod_versions_caption = /** @type {(inputs: Mod_Versions_CaptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Versões de ${i?.name}`)
};

const ru_mod_versions_caption = /** @type {(inputs: Mod_Versions_CaptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Версии ${i?.name}`)
};

const sv_mod_versions_caption = /** @type {(inputs: Mod_Versions_CaptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Versioner av ${i?.name}`)
};

const tr_mod_versions_caption = /** @type {(inputs: Mod_Versions_CaptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} sürümleri`)
};

const zh_mod_versions_caption = /** @type {(inputs: Mod_Versions_CaptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} 的版本`)
};

const ja_mod_versions_caption = /** @type {(inputs: Mod_Versions_CaptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} のバージョン`)
};

/**
* | output |
* | --- |
* | "Versions of {name}" |
*
* @param {Mod_Versions_CaptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_versions_caption = /** @type {((inputs: Mod_Versions_CaptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Versions_CaptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_versions_caption(inputs)
	if (locale === "de") return de_mod_versions_caption(inputs)
	if (locale === "fr") return fr_mod_versions_caption(inputs)
	if (locale === "it") return it_mod_versions_caption(inputs)
	if (locale === "nl") return nl_mod_versions_caption(inputs)
	if (locale === "pl") return pl_mod_versions_caption(inputs)
	if (locale === "pt") return pt_mod_versions_caption(inputs)
	if (locale === "ru") return ru_mod_versions_caption(inputs)
	if (locale === "sv") return sv_mod_versions_caption(inputs)
	if (locale === "tr") return tr_mod_versions_caption(inputs)
	if (locale === "zh") return zh_mod_versions_caption(inputs)
	if (locale === "ja") return ja_mod_versions_caption(inputs)
	return en_mod_versions_caption(inputs)
});
