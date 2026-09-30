/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Multiplayer_Host_OnlyInputs */

const en_upload_multiplayer_host_only = /** @type {(inputs: Upload_Multiplayer_Host_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Host only`)
};

const es_upload_multiplayer_host_only = /** @type {(inputs: Upload_Multiplayer_Host_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo el anfitrión`)
};

const de_upload_multiplayer_host_only = /** @type {(inputs: Upload_Multiplayer_Host_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nur der Host`)
};

const fr_upload_multiplayer_host_only = /** @type {(inputs: Upload_Multiplayer_Host_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hôte uniquement`)
};

const it_upload_multiplayer_host_only = /** @type {(inputs: Upload_Multiplayer_Host_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo l’host`)
};

const nl_upload_multiplayer_host_only = /** @type {(inputs: Upload_Multiplayer_Host_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alleen de host`)
};

const pl_upload_multiplayer_host_only = /** @type {(inputs: Upload_Multiplayer_Host_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tylko host`)
};

const pt_upload_multiplayer_host_only = /** @type {(inputs: Upload_Multiplayer_Host_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Só o anfitrião`)
};

const ru_upload_multiplayer_host_only = /** @type {(inputs: Upload_Multiplayer_Host_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Только хосту`)
};

const sv_upload_multiplayer_host_only = /** @type {(inputs: Upload_Multiplayer_Host_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bara värden`)
};

const tr_upload_multiplayer_host_only = /** @type {(inputs: Upload_Multiplayer_Host_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yalnızca sunucu sahibi`)
};

const zh_upload_multiplayer_host_only = /** @type {(inputs: Upload_Multiplayer_Host_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`仅房主`)
};

const ja_upload_multiplayer_host_only = /** @type {(inputs: Upload_Multiplayer_Host_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ホストのみ`)
};

/**
* | output |
* | --- |
* | "Host only" |
*
* @param {Upload_Multiplayer_Host_OnlyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_multiplayer_host_only = /** @type {((inputs?: Upload_Multiplayer_Host_OnlyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Multiplayer_Host_OnlyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_multiplayer_host_only(inputs)
	if (locale === "de") return de_upload_multiplayer_host_only(inputs)
	if (locale === "fr") return fr_upload_multiplayer_host_only(inputs)
	if (locale === "it") return it_upload_multiplayer_host_only(inputs)
	if (locale === "nl") return nl_upload_multiplayer_host_only(inputs)
	if (locale === "pl") return pl_upload_multiplayer_host_only(inputs)
	if (locale === "pt") return pt_upload_multiplayer_host_only(inputs)
	if (locale === "ru") return ru_upload_multiplayer_host_only(inputs)
	if (locale === "sv") return sv_upload_multiplayer_host_only(inputs)
	if (locale === "tr") return tr_upload_multiplayer_host_only(inputs)
	if (locale === "zh") return zh_upload_multiplayer_host_only(inputs)
	if (locale === "ja") return ja_upload_multiplayer_host_only(inputs)
	return en_upload_multiplayer_host_only(inputs)
});
