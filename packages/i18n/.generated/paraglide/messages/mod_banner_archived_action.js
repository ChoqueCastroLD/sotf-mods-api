/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Banner_Archived_ActionInputs */

const en_mod_banner_archived_action = /** @type {(inputs: Mod_Banner_Archived_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Go to the successor`)
};

const es_mod_banner_archived_action = /** @type {(inputs: Mod_Banner_Archived_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ir al sucesor`)
};

const de_mod_banner_archived_action = /** @type {(inputs: Mod_Banner_Archived_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zum Nachfolger`)
};

const fr_mod_banner_archived_action = /** @type {(inputs: Mod_Banner_Archived_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voir le successeur`)
};

const it_mod_banner_archived_action = /** @type {(inputs: Mod_Banner_Archived_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vai alla successiva`)
};

const nl_mod_banner_archived_action = /** @type {(inputs: Mod_Banner_Archived_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Naar de opvolger`)
};

const pl_mod_banner_archived_action = /** @type {(inputs: Mod_Banner_Archived_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przejdź do następcy`)
};

const pt_mod_banner_archived_action = /** @type {(inputs: Mod_Banner_Archived_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ir para o sucessor`)
};

const ru_mod_banner_archived_action = /** @type {(inputs: Mod_Banner_Archived_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`К преемнику`)
};

const sv_mod_banner_archived_action = /** @type {(inputs: Mod_Banner_Archived_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Till efterföljaren`)
};

const tr_mod_banner_archived_action = /** @type {(inputs: Mod_Banner_Archived_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeni moda git`)
};

const zh_mod_banner_archived_action = /** @type {(inputs: Mod_Banner_Archived_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`前往替代模组`)
};

const ja_mod_banner_archived_action = /** @type {(inputs: Mod_Banner_Archived_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`後継 MOD へ`)
};

/**
* | output |
* | --- |
* | "Go to the successor" |
*
* @param {Mod_Banner_Archived_ActionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_banner_archived_action = /** @type {((inputs?: Mod_Banner_Archived_ActionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Banner_Archived_ActionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_banner_archived_action(inputs)
	if (locale === "de") return de_mod_banner_archived_action(inputs)
	if (locale === "fr") return fr_mod_banner_archived_action(inputs)
	if (locale === "it") return it_mod_banner_archived_action(inputs)
	if (locale === "nl") return nl_mod_banner_archived_action(inputs)
	if (locale === "pl") return pl_mod_banner_archived_action(inputs)
	if (locale === "pt") return pt_mod_banner_archived_action(inputs)
	if (locale === "ru") return ru_mod_banner_archived_action(inputs)
	if (locale === "sv") return sv_mod_banner_archived_action(inputs)
	if (locale === "tr") return tr_mod_banner_archived_action(inputs)
	if (locale === "zh") return zh_mod_banner_archived_action(inputs)
	if (locale === "ja") return ja_mod_banner_archived_action(inputs)
	return en_mod_banner_archived_action(inputs)
});
