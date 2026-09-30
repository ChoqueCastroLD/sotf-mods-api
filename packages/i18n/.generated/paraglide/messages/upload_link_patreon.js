/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Link_PatreonInputs */

const en_upload_link_patreon = /** @type {(inputs: Upload_Link_PatreonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Patreon`)
};

const es_upload_link_patreon = /** @type {(inputs: Upload_Link_PatreonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Patreon`)
};

const de_upload_link_patreon = /** @type {(inputs: Upload_Link_PatreonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Patreon`)
};

const fr_upload_link_patreon = /** @type {(inputs: Upload_Link_PatreonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Patreon`)
};

const it_upload_link_patreon = /** @type {(inputs: Upload_Link_PatreonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Patreon`)
};

const nl_upload_link_patreon = /** @type {(inputs: Upload_Link_PatreonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Patreon`)
};

const pl_upload_link_patreon = /** @type {(inputs: Upload_Link_PatreonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Patreon`)
};

const pt_upload_link_patreon = /** @type {(inputs: Upload_Link_PatreonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Patreon`)
};

const ru_upload_link_patreon = /** @type {(inputs: Upload_Link_PatreonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Patreon`)
};

const sv_upload_link_patreon = /** @type {(inputs: Upload_Link_PatreonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Patreon`)
};

const tr_upload_link_patreon = /** @type {(inputs: Upload_Link_PatreonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Patreon`)
};

const zh_upload_link_patreon = /** @type {(inputs: Upload_Link_PatreonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Patreon`)
};

const ja_upload_link_patreon = /** @type {(inputs: Upload_Link_PatreonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Patreon`)
};

/**
* | output |
* | --- |
* | "Patreon" |
*
* @param {Upload_Link_PatreonInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_link_patreon = /** @type {((inputs?: Upload_Link_PatreonInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Link_PatreonInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_link_patreon(inputs)
	if (locale === "de") return de_upload_link_patreon(inputs)
	if (locale === "fr") return fr_upload_link_patreon(inputs)
	if (locale === "it") return it_upload_link_patreon(inputs)
	if (locale === "nl") return nl_upload_link_patreon(inputs)
	if (locale === "pl") return pl_upload_link_patreon(inputs)
	if (locale === "pt") return pt_upload_link_patreon(inputs)
	if (locale === "ru") return ru_upload_link_patreon(inputs)
	if (locale === "sv") return sv_upload_link_patreon(inputs)
	if (locale === "tr") return tr_upload_link_patreon(inputs)
	if (locale === "zh") return zh_upload_link_patreon(inputs)
	if (locale === "ja") return ja_upload_link_patreon(inputs)
	return en_upload_link_patreon(inputs)
});
