/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ reason: NonNullable<unknown> }} Mod_Version_Yanked_ReasonInputs */

const en_mod_version_yanked_reason = /** @type {(inputs: Mod_Version_Yanked_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Withdrawn by the creator: ${i?.reason}`)
};

const es_mod_version_yanked_reason = /** @type {(inputs: Mod_Version_Yanked_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Retirada por el creador: ${i?.reason}`)
};

const de_mod_version_yanked_reason = /** @type {(inputs: Mod_Version_Yanked_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Vom Ersteller zurückgezogen: ${i?.reason}`)
};

const fr_mod_version_yanked_reason = /** @type {(inputs: Mod_Version_Yanked_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Retirée par le créateur : ${i?.reason}`)
};

const it_mod_version_yanked_reason = /** @type {(inputs: Mod_Version_Yanked_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ritirata dal creatore: ${i?.reason}`)
};

const nl_mod_version_yanked_reason = /** @type {(inputs: Mod_Version_Yanked_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ingetrokken door de maker: ${i?.reason}`)
};

const pl_mod_version_yanked_reason = /** @type {(inputs: Mod_Version_Yanked_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wycofana przez twórcę: ${i?.reason}`)
};

const pt_mod_version_yanked_reason = /** @type {(inputs: Mod_Version_Yanked_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Retirada pelo criador: ${i?.reason}`)
};

const ru_mod_version_yanked_reason = /** @type {(inputs: Mod_Version_Yanked_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Отозвана автором: ${i?.reason}`)
};

const sv_mod_version_yanked_reason = /** @type {(inputs: Mod_Version_Yanked_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Indragen av skaparen: ${i?.reason}`)
};

const tr_mod_version_yanked_reason = /** @type {(inputs: Mod_Version_Yanked_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Yapımcı tarafından geri çekildi: ${i?.reason}`)
};

const zh_mod_version_yanked_reason = /** @type {(inputs: Mod_Version_Yanked_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`作者已撤回：${i?.reason}`)
};

const ja_mod_version_yanked_reason = /** @type {(inputs: Mod_Version_Yanked_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`作者が取り下げ：${i?.reason}`)
};

/**
* | output |
* | --- |
* | "Withdrawn by the creator: {reason}" |
*
* @param {Mod_Version_Yanked_ReasonInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_version_yanked_reason = /** @type {((inputs: Mod_Version_Yanked_ReasonInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Version_Yanked_ReasonInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_version_yanked_reason(inputs)
	if (locale === "de") return de_mod_version_yanked_reason(inputs)
	if (locale === "fr") return fr_mod_version_yanked_reason(inputs)
	if (locale === "it") return it_mod_version_yanked_reason(inputs)
	if (locale === "nl") return nl_mod_version_yanked_reason(inputs)
	if (locale === "pl") return pl_mod_version_yanked_reason(inputs)
	if (locale === "pt") return pt_mod_version_yanked_reason(inputs)
	if (locale === "ru") return ru_mod_version_yanked_reason(inputs)
	if (locale === "sv") return sv_mod_version_yanked_reason(inputs)
	if (locale === "tr") return tr_mod_version_yanked_reason(inputs)
	if (locale === "zh") return zh_mod_version_yanked_reason(inputs)
	if (locale === "ja") return ja_mod_version_yanked_reason(inputs)
	return en_mod_version_yanked_reason(inputs)
});
