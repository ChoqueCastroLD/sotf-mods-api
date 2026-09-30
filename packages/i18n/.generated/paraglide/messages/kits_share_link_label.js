/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Share_Link_LabelInputs */

const en_kits_share_link_label = /** @type {(inputs: Kits_Share_Link_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Full link`)
};

const es_kits_share_link_label = /** @type {(inputs: Kits_Share_Link_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enlace completo`)
};

const de_kits_share_link_label = /** @type {(inputs: Kits_Share_Link_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vollständiger Link`)
};

const fr_kits_share_link_label = /** @type {(inputs: Kits_Share_Link_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lien complet`)
};

const it_kits_share_link_label = /** @type {(inputs: Kits_Share_Link_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link completo`)
};

const nl_kits_share_link_label = /** @type {(inputs: Kits_Share_Link_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volledige link`)
};

const pl_kits_share_link_label = /** @type {(inputs: Kits_Share_Link_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pełny link`)
};

const pt_kits_share_link_label = /** @type {(inputs: Kits_Share_Link_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link completo`)
};

const ru_kits_share_link_label = /** @type {(inputs: Kits_Share_Link_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Полная ссылка`)
};

const sv_kits_share_link_label = /** @type {(inputs: Kits_Share_Link_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fullständig länk`)
};

const tr_kits_share_link_label = /** @type {(inputs: Kits_Share_Link_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tam bağlantı`)
};

const zh_kits_share_link_label = /** @type {(inputs: Kits_Share_Link_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`完整链接`)
};

const ja_kits_share_link_label = /** @type {(inputs: Kits_Share_Link_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フルリンク`)
};

/**
* | output |
* | --- |
* | "Full link" |
*
* @param {Kits_Share_Link_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_share_link_label = /** @type {((inputs?: Kits_Share_Link_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Share_Link_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_share_link_label(inputs)
	if (locale === "de") return de_kits_share_link_label(inputs)
	if (locale === "fr") return fr_kits_share_link_label(inputs)
	if (locale === "it") return it_kits_share_link_label(inputs)
	if (locale === "nl") return nl_kits_share_link_label(inputs)
	if (locale === "pl") return pl_kits_share_link_label(inputs)
	if (locale === "pt") return pt_kits_share_link_label(inputs)
	if (locale === "ru") return ru_kits_share_link_label(inputs)
	if (locale === "sv") return sv_kits_share_link_label(inputs)
	if (locale === "tr") return tr_kits_share_link_label(inputs)
	if (locale === "zh") return zh_kits_share_link_label(inputs)
	if (locale === "ja") return ja_kits_share_link_label(inputs)
	return en_kits_share_link_label(inputs)
});
