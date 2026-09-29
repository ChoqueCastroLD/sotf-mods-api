/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Multiplayer_Host_OnlyInputs */

const en_common_multiplayer_host_only = /** @type {(inputs: Common_Multiplayer_Host_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Host only`)
};

const es_common_multiplayer_host_only = /** @type {(inputs: Common_Multiplayer_Host_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo el host`)
};

const de_common_multiplayer_host_only = /** @type {(inputs: Common_Multiplayer_Host_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nur der Host`)
};

const fr_common_multiplayer_host_only = /** @type {(inputs: Common_Multiplayer_Host_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hôte uniquement`)
};

const it_common_multiplayer_host_only = /** @type {(inputs: Common_Multiplayer_Host_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo l’host`)
};

const nl_common_multiplayer_host_only = /** @type {(inputs: Common_Multiplayer_Host_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alleen de host`)
};

const pl_common_multiplayer_host_only = /** @type {(inputs: Common_Multiplayer_Host_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tylko host`)
};

const pt_common_multiplayer_host_only = /** @type {(inputs: Common_Multiplayer_Host_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Só o host`)
};

const ru_common_multiplayer_host_only = /** @type {(inputs: Common_Multiplayer_Host_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Только хосту`)
};

const sv_common_multiplayer_host_only = /** @type {(inputs: Common_Multiplayer_Host_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Endast värden`)
};

const tr_common_multiplayer_host_only = /** @type {(inputs: Common_Multiplayer_Host_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yalnızca sunucu sahibi`)
};

const zh_common_multiplayer_host_only = /** @type {(inputs: Common_Multiplayer_Host_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`仅房主需要`)
};

const ja_common_multiplayer_host_only = /** @type {(inputs: Common_Multiplayer_Host_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ホストのみ`)
};

/**
* | output |
* | --- |
* | "Host only" |
*
* @param {Common_Multiplayer_Host_OnlyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_multiplayer_host_only = /** @type {((inputs?: Common_Multiplayer_Host_OnlyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Multiplayer_Host_OnlyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_multiplayer_host_only(inputs)
	if (locale === "de") return de_common_multiplayer_host_only(inputs)
	if (locale === "fr") return fr_common_multiplayer_host_only(inputs)
	if (locale === "it") return it_common_multiplayer_host_only(inputs)
	if (locale === "nl") return nl_common_multiplayer_host_only(inputs)
	if (locale === "pl") return pl_common_multiplayer_host_only(inputs)
	if (locale === "pt") return pt_common_multiplayer_host_only(inputs)
	if (locale === "ru") return ru_common_multiplayer_host_only(inputs)
	if (locale === "sv") return sv_common_multiplayer_host_only(inputs)
	if (locale === "tr") return tr_common_multiplayer_host_only(inputs)
	if (locale === "zh") return zh_common_multiplayer_host_only(inputs)
	if (locale === "ja") return ja_common_multiplayer_host_only(inputs)
	return en_common_multiplayer_host_only(inputs)
});
