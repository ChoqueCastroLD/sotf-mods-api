/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Notify_OnInputs */

const en_me_notify_on = /** @type {(inputs: Me_Notify_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Update signals on`)
};

const es_me_notify_on = /** @type {(inputs: Me_Notify_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avisos de actualización activados`)
};

const de_me_notify_on = /** @type {(inputs: Me_Notify_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Update-Signale an`)
};

const fr_me_notify_on = /** @type {(inputs: Me_Notify_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signaux de mise à jour activés`)
};

const it_me_notify_on = /** @type {(inputs: Me_Notify_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segnali di aggiornamento attivi`)
};

const nl_me_notify_on = /** @type {(inputs: Me_Notify_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Updatesignalen aan`)
};

const pl_me_notify_on = /** @type {(inputs: Me_Notify_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sygnały o aktualizacjach włączone`)
};

const pt_me_notify_on = /** @type {(inputs: Me_Notify_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sinais de atualização ativados`)
};

const ru_me_notify_on = /** @type {(inputs: Me_Notify_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сигналы об обновлениях включены`)
};

const sv_me_notify_on = /** @type {(inputs: Me_Notify_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uppdateringssignaler på`)
};

const tr_me_notify_on = /** @type {(inputs: Me_Notify_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Güncelleme sinyalleri açık`)
};

const zh_me_notify_on = /** @type {(inputs: Me_Notify_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更新信号已开启`)
};

const ja_me_notify_on = /** @type {(inputs: Me_Notify_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更新シグナル オン`)
};

/**
* | output |
* | --- |
* | "Update signals on" |
*
* @param {Me_Notify_OnInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_notify_on = /** @type {((inputs?: Me_Notify_OnInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Notify_OnInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_notify_on(inputs)
	if (locale === "de") return de_me_notify_on(inputs)
	if (locale === "fr") return fr_me_notify_on(inputs)
	if (locale === "it") return it_me_notify_on(inputs)
	if (locale === "nl") return nl_me_notify_on(inputs)
	if (locale === "pl") return pl_me_notify_on(inputs)
	if (locale === "pt") return pt_me_notify_on(inputs)
	if (locale === "ru") return ru_me_notify_on(inputs)
	if (locale === "sv") return sv_me_notify_on(inputs)
	if (locale === "tr") return tr_me_notify_on(inputs)
	if (locale === "zh") return zh_me_notify_on(inputs)
	if (locale === "ja") return ja_me_notify_on(inputs)
	return en_me_notify_on(inputs)
});
