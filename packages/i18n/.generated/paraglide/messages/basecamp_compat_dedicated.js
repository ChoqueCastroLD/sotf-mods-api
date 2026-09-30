/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Compat_DedicatedInputs */

const en_basecamp_compat_dedicated = /** @type {(inputs: Basecamp_Compat_DedicatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dedicated server`)
};

const es_basecamp_compat_dedicated = /** @type {(inputs: Basecamp_Compat_DedicatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Servidor dedicado`)
};

const de_basecamp_compat_dedicated = /** @type {(inputs: Basecamp_Compat_DedicatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dedizierter Server`)
};

const fr_basecamp_compat_dedicated = /** @type {(inputs: Basecamp_Compat_DedicatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Serveur dédié`)
};

const it_basecamp_compat_dedicated = /** @type {(inputs: Basecamp_Compat_DedicatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Server dedicato`)
};

const nl_basecamp_compat_dedicated = /** @type {(inputs: Basecamp_Compat_DedicatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dedicated server`)
};

const pl_basecamp_compat_dedicated = /** @type {(inputs: Basecamp_Compat_DedicatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Serwer dedykowany`)
};

const pt_basecamp_compat_dedicated = /** @type {(inputs: Basecamp_Compat_DedicatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Servidor dedicado`)
};

const ru_basecamp_compat_dedicated = /** @type {(inputs: Basecamp_Compat_DedicatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выделенный сервер`)
};

const sv_basecamp_compat_dedicated = /** @type {(inputs: Basecamp_Compat_DedicatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dedikerad server`)
};

const tr_basecamp_compat_dedicated = /** @type {(inputs: Basecamp_Compat_DedicatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Özel sunucu`)
};

const zh_basecamp_compat_dedicated = /** @type {(inputs: Basecamp_Compat_DedicatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`专用服务器`)
};

const ja_basecamp_compat_dedicated = /** @type {(inputs: Basecamp_Compat_DedicatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`専用サーバー`)
};

/**
* | output |
* | --- |
* | "Dedicated server" |
*
* @param {Basecamp_Compat_DedicatedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_compat_dedicated = /** @type {((inputs?: Basecamp_Compat_DedicatedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Compat_DedicatedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_compat_dedicated(inputs)
	if (locale === "de") return de_basecamp_compat_dedicated(inputs)
	if (locale === "fr") return fr_basecamp_compat_dedicated(inputs)
	if (locale === "it") return it_basecamp_compat_dedicated(inputs)
	if (locale === "nl") return nl_basecamp_compat_dedicated(inputs)
	if (locale === "pl") return pl_basecamp_compat_dedicated(inputs)
	if (locale === "pt") return pt_basecamp_compat_dedicated(inputs)
	if (locale === "ru") return ru_basecamp_compat_dedicated(inputs)
	if (locale === "sv") return sv_basecamp_compat_dedicated(inputs)
	if (locale === "tr") return tr_basecamp_compat_dedicated(inputs)
	if (locale === "zh") return zh_basecamp_compat_dedicated(inputs)
	if (locale === "ja") return ja_basecamp_compat_dedicated(inputs)
	return en_basecamp_compat_dedicated(inputs)
});
