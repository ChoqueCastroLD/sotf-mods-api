/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Share_Link_LabelInputs */

const en_mod_share_link_label = /** @type {(inputs: Mod_Share_Link_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link`)
};

const es_mod_share_link_label = /** @type {(inputs: Mod_Share_Link_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enlace`)
};

const de_mod_share_link_label = /** @type {(inputs: Mod_Share_Link_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link`)
};

const fr_mod_share_link_label = /** @type {(inputs: Mod_Share_Link_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lien`)
};

const it_mod_share_link_label = /** @type {(inputs: Mod_Share_Link_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link`)
};

const nl_mod_share_link_label = /** @type {(inputs: Mod_Share_Link_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link`)
};

const pl_mod_share_link_label = /** @type {(inputs: Mod_Share_Link_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link`)
};

const pt_mod_share_link_label = /** @type {(inputs: Mod_Share_Link_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link`)
};

const ru_mod_share_link_label = /** @type {(inputs: Mod_Share_Link_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ссылка`)
};

const sv_mod_share_link_label = /** @type {(inputs: Mod_Share_Link_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Länk`)
};

const tr_mod_share_link_label = /** @type {(inputs: Mod_Share_Link_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bağlantı`)
};

const zh_mod_share_link_label = /** @type {(inputs: Mod_Share_Link_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`链接`)
};

const ja_mod_share_link_label = /** @type {(inputs: Mod_Share_Link_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リンク`)
};

/**
* | output |
* | --- |
* | "Link" |
*
* @param {Mod_Share_Link_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_share_link_label = /** @type {((inputs?: Mod_Share_Link_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Share_Link_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_share_link_label(inputs)
	if (locale === "de") return de_mod_share_link_label(inputs)
	if (locale === "fr") return fr_mod_share_link_label(inputs)
	if (locale === "it") return it_mod_share_link_label(inputs)
	if (locale === "nl") return nl_mod_share_link_label(inputs)
	if (locale === "pl") return pl_mod_share_link_label(inputs)
	if (locale === "pt") return pt_mod_share_link_label(inputs)
	if (locale === "ru") return ru_mod_share_link_label(inputs)
	if (locale === "sv") return sv_mod_share_link_label(inputs)
	if (locale === "tr") return tr_mod_share_link_label(inputs)
	if (locale === "zh") return zh_mod_share_link_label(inputs)
	if (locale === "ja") return ja_mod_share_link_label(inputs)
	return en_mod_share_link_label(inputs)
});
