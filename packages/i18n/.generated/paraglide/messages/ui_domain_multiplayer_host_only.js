/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Multiplayer_Host_OnlyInputs */

const en_ui_domain_multiplayer_host_only = /** @type {(inputs: Ui_Domain_Multiplayer_Host_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Host only`)
};

const es_ui_domain_multiplayer_host_only = /** @type {(inputs: Ui_Domain_Multiplayer_Host_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo el host`)
};

const de_ui_domain_multiplayer_host_only = /** @type {(inputs: Ui_Domain_Multiplayer_Host_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nur der Host`)
};

const fr_ui_domain_multiplayer_host_only = /** @type {(inputs: Ui_Domain_Multiplayer_Host_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hôte uniquement`)
};

const it_ui_domain_multiplayer_host_only = /** @type {(inputs: Ui_Domain_Multiplayer_Host_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo l’host`)
};

const nl_ui_domain_multiplayer_host_only = /** @type {(inputs: Ui_Domain_Multiplayer_Host_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alleen de host`)
};

const pl_ui_domain_multiplayer_host_only = /** @type {(inputs: Ui_Domain_Multiplayer_Host_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tylko host`)
};

const pt_ui_domain_multiplayer_host_only = /** @type {(inputs: Ui_Domain_Multiplayer_Host_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Só o host`)
};

const ru_ui_domain_multiplayer_host_only = /** @type {(inputs: Ui_Domain_Multiplayer_Host_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Только хосту`)
};

const sv_ui_domain_multiplayer_host_only = /** @type {(inputs: Ui_Domain_Multiplayer_Host_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Endast värden`)
};

const tr_ui_domain_multiplayer_host_only = /** @type {(inputs: Ui_Domain_Multiplayer_Host_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yalnızca sunucu sahibi`)
};

const zh_ui_domain_multiplayer_host_only = /** @type {(inputs: Ui_Domain_Multiplayer_Host_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`仅房主需要`)
};

const ja_ui_domain_multiplayer_host_only = /** @type {(inputs: Ui_Domain_Multiplayer_Host_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ホストのみ`)
};

/**
* | output |
* | --- |
* | "Host only" |
*
* @param {Ui_Domain_Multiplayer_Host_OnlyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_multiplayer_host_only = /** @type {((inputs?: Ui_Domain_Multiplayer_Host_OnlyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Multiplayer_Host_OnlyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_multiplayer_host_only(inputs)
	if (locale === "de") return de_ui_domain_multiplayer_host_only(inputs)
	if (locale === "fr") return fr_ui_domain_multiplayer_host_only(inputs)
	if (locale === "it") return it_ui_domain_multiplayer_host_only(inputs)
	if (locale === "nl") return nl_ui_domain_multiplayer_host_only(inputs)
	if (locale === "pl") return pl_ui_domain_multiplayer_host_only(inputs)
	if (locale === "pt") return pt_ui_domain_multiplayer_host_only(inputs)
	if (locale === "ru") return ru_ui_domain_multiplayer_host_only(inputs)
	if (locale === "sv") return sv_ui_domain_multiplayer_host_only(inputs)
	if (locale === "tr") return tr_ui_domain_multiplayer_host_only(inputs)
	if (locale === "zh") return zh_ui_domain_multiplayer_host_only(inputs)
	if (locale === "ja") return ja_ui_domain_multiplayer_host_only(inputs)
	return en_ui_domain_multiplayer_host_only(inputs)
});
