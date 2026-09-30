/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Notify_OffInputs */

const en_me_notify_off = /** @type {(inputs: Me_Notify_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Update signals off`)
};

const es_me_notify_off = /** @type {(inputs: Me_Notify_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avisos de actualización desactivados`)
};

const de_me_notify_off = /** @type {(inputs: Me_Notify_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Update-Signale aus`)
};

const fr_me_notify_off = /** @type {(inputs: Me_Notify_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signaux de mise à jour désactivés`)
};

const it_me_notify_off = /** @type {(inputs: Me_Notify_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segnali di aggiornamento disattivati`)
};

const nl_me_notify_off = /** @type {(inputs: Me_Notify_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Updatesignalen uit`)
};

const pl_me_notify_off = /** @type {(inputs: Me_Notify_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sygnały o aktualizacjach wyłączone`)
};

const pt_me_notify_off = /** @type {(inputs: Me_Notify_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sinais de atualização desativados`)
};

const ru_me_notify_off = /** @type {(inputs: Me_Notify_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сигналы об обновлениях выключены`)
};

const sv_me_notify_off = /** @type {(inputs: Me_Notify_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uppdateringssignaler av`)
};

const tr_me_notify_off = /** @type {(inputs: Me_Notify_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Güncelleme sinyalleri kapalı`)
};

const zh_me_notify_off = /** @type {(inputs: Me_Notify_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更新信号已关闭`)
};

const ja_me_notify_off = /** @type {(inputs: Me_Notify_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更新シグナル オフ`)
};

/**
* | output |
* | --- |
* | "Update signals off" |
*
* @param {Me_Notify_OffInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_notify_off = /** @type {((inputs?: Me_Notify_OffInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Notify_OffInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_notify_off(inputs)
	if (locale === "de") return de_me_notify_off(inputs)
	if (locale === "fr") return fr_me_notify_off(inputs)
	if (locale === "it") return it_me_notify_off(inputs)
	if (locale === "nl") return nl_me_notify_off(inputs)
	if (locale === "pl") return pl_me_notify_off(inputs)
	if (locale === "pt") return pt_me_notify_off(inputs)
	if (locale === "ru") return ru_me_notify_off(inputs)
	if (locale === "sv") return sv_me_notify_off(inputs)
	if (locale === "tr") return tr_me_notify_off(inputs)
	if (locale === "zh") return zh_me_notify_off(inputs)
	if (locale === "ja") return ja_me_notify_off(inputs)
	return en_me_notify_off(inputs)
});
