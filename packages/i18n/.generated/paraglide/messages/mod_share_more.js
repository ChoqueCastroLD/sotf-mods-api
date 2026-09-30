/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Share_MoreInputs */

const en_mod_share_more = /** @type {(inputs: Mod_Share_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`More…`)
};

const es_mod_share_more = /** @type {(inputs: Mod_Share_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Más…`)
};

const de_mod_share_more = /** @type {(inputs: Mod_Share_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mehr…`)
};

const fr_mod_share_more = /** @type {(inputs: Mod_Share_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plus…`)
};

const it_mod_share_more = /** @type {(inputs: Mod_Share_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Altro…`)
};

const nl_mod_share_more = /** @type {(inputs: Mod_Share_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meer…`)
};

const pl_mod_share_more = /** @type {(inputs: Mod_Share_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Więcej…`)
};

const pt_mod_share_more = /** @type {(inputs: Mod_Share_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mais…`)
};

const ru_mod_share_more = /** @type {(inputs: Mod_Share_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ещё…`)
};

const sv_mod_share_more = /** @type {(inputs: Mod_Share_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mer…`)
};

const tr_mod_share_more = /** @type {(inputs: Mod_Share_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diğer…`)
};

const zh_mod_share_more = /** @type {(inputs: Mod_Share_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更多…`)
};

const ja_mod_share_more = /** @type {(inputs: Mod_Share_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`その他…`)
};

/**
* | output |
* | --- |
* | "More…" |
*
* @param {Mod_Share_MoreInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_share_more = /** @type {((inputs?: Mod_Share_MoreInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Share_MoreInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_share_more(inputs)
	if (locale === "de") return de_mod_share_more(inputs)
	if (locale === "fr") return fr_mod_share_more(inputs)
	if (locale === "it") return it_mod_share_more(inputs)
	if (locale === "nl") return nl_mod_share_more(inputs)
	if (locale === "pl") return pl_mod_share_more(inputs)
	if (locale === "pt") return pt_mod_share_more(inputs)
	if (locale === "ru") return ru_mod_share_more(inputs)
	if (locale === "sv") return sv_mod_share_more(inputs)
	if (locale === "tr") return tr_mod_share_more(inputs)
	if (locale === "zh") return zh_mod_share_more(inputs)
	if (locale === "ja") return ja_mod_share_more(inputs)
	return en_mod_share_more(inputs)
});
