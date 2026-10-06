/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Sanction_Ban_HintInputs */

const en_ranger_sanction_ban_hint = /** @type {(inputs: Ranger_Sanction_Ban_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Permanent. Logs them out everywhere.`)
};

const es_ranger_sanction_ban_hint = /** @type {(inputs: Ranger_Sanction_Ban_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Permanente. Cierra todas sus sesiones.`)
};

const de_ranger_sanction_ban_hint = /** @type {(inputs: Ranger_Sanction_Ban_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dauerhaft. Meldet überall ab.`)
};

const fr_ranger_sanction_ban_hint = /** @type {(inputs: Ranger_Sanction_Ban_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Définitif. Déconnecte partout.`)
};

const it_ranger_sanction_ban_hint = /** @type {(inputs: Ranger_Sanction_Ban_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Permanente. Lo disconnette ovunque.`)
};

const nl_ranger_sanction_ban_hint = /** @type {(inputs: Ranger_Sanction_Ban_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Permanent. Logt overal uit.`)
};

const pl_ranger_sanction_ban_hint = /** @type {(inputs: Ranger_Sanction_Ban_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Na stałe. Wylogowuje wszędzie.`)
};

const pt_ranger_sanction_ban_hint = /** @type {(inputs: Ranger_Sanction_Ban_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Permanente. Encerra todas as sessões.`)
};

const ru_ranger_sanction_ban_hint = /** @type {(inputs: Ranger_Sanction_Ban_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Навсегда. Завершает все сеансы.`)
};

const sv_ranger_sanction_ban_hint = /** @type {(inputs: Ranger_Sanction_Ban_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Permanent. Loggar ut överallt.`)
};

const tr_ranger_sanction_ban_hint = /** @type {(inputs: Ranger_Sanction_Ban_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kalıcı. Her yerden çıkış yaptırır.`)
};

const zh_ranger_sanction_ban_hint = /** @type {(inputs: Ranger_Sanction_Ban_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`永久。在所有设备上退出。`)
};

const ja_ranger_sanction_ban_hint = /** @type {(inputs: Ranger_Sanction_Ban_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`永久。すべての端末からログアウトします。`)
};

/**
* | output |
* | --- |
* | "Permanent. Logs them out everywhere." |
*
* @param {Ranger_Sanction_Ban_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_sanction_ban_hint = /** @type {((inputs?: Ranger_Sanction_Ban_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Sanction_Ban_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_sanction_ban_hint(inputs)
	if (locale === "de") return de_ranger_sanction_ban_hint(inputs)
	if (locale === "fr") return fr_ranger_sanction_ban_hint(inputs)
	if (locale === "it") return it_ranger_sanction_ban_hint(inputs)
	if (locale === "nl") return nl_ranger_sanction_ban_hint(inputs)
	if (locale === "pl") return pl_ranger_sanction_ban_hint(inputs)
	if (locale === "pt") return pt_ranger_sanction_ban_hint(inputs)
	if (locale === "ru") return ru_ranger_sanction_ban_hint(inputs)
	if (locale === "sv") return sv_ranger_sanction_ban_hint(inputs)
	if (locale === "tr") return tr_ranger_sanction_ban_hint(inputs)
	if (locale === "zh") return zh_ranger_sanction_ban_hint(inputs)
	if (locale === "ja") return ja_ranger_sanction_ban_hint(inputs)
	return en_ranger_sanction_ban_hint(inputs)
});
