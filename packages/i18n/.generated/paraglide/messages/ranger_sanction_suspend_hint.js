/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Sanction_Suspend_HintInputs */

const en_ranger_sanction_suspend_hint = /** @type {(inputs: Ranger_Sanction_Suspend_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Can’t log in until the end date.`)
};

const es_ranger_sanction_suspend_hint = /** @type {(inputs: Ranger_Sanction_Suspend_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No puede iniciar sesión hasta la fecha de fin.`)
};

const de_ranger_sanction_suspend_hint = /** @type {(inputs: Ranger_Sanction_Suspend_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine Anmeldung bis zum Enddatum.`)
};

const fr_ranger_sanction_suspend_hint = /** @type {(inputs: Ranger_Sanction_Suspend_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ne peut plus se connecter jusqu’à la date de fin.`)
};

const it_ranger_sanction_suspend_hint = /** @type {(inputs: Ranger_Sanction_Suspend_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non può accedere fino alla data di fine.`)
};

const nl_ranger_sanction_suspend_hint = /** @type {(inputs: Ranger_Sanction_Suspend_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kan tot de einddatum niet inloggen.`)
};

const pl_ranger_sanction_suspend_hint = /** @type {(inputs: Ranger_Sanction_Suspend_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie może się zalogować do daty końcowej.`)
};

const pt_ranger_sanction_suspend_hint = /** @type {(inputs: Ranger_Sanction_Suspend_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não pode entrar até a data final.`)
};

const ru_ranger_sanction_suspend_hint = /** @type {(inputs: Ranger_Sanction_Suspend_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не сможет войти до даты окончания.`)
};

const sv_ranger_sanction_suspend_hint = /** @type {(inputs: Ranger_Sanction_Suspend_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kan inte logga in förrän slutdatumet.`)
};

const tr_ranger_sanction_suspend_hint = /** @type {(inputs: Ranger_Sanction_Suspend_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bitiş tarihine kadar giriş yapamaz.`)
};

const zh_ranger_sanction_suspend_hint = /** @type {(inputs: Ranger_Sanction_Suspend_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在结束日期前无法登录。`)
};

const ja_ranger_sanction_suspend_hint = /** @type {(inputs: Ranger_Sanction_Suspend_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`終了日までログインできません。`)
};

/**
* | output |
* | --- |
* | "Can’t log in until the end date." |
*
* @param {Ranger_Sanction_Suspend_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_sanction_suspend_hint = /** @type {((inputs?: Ranger_Sanction_Suspend_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Sanction_Suspend_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_sanction_suspend_hint(inputs)
	if (locale === "de") return de_ranger_sanction_suspend_hint(inputs)
	if (locale === "fr") return fr_ranger_sanction_suspend_hint(inputs)
	if (locale === "it") return it_ranger_sanction_suspend_hint(inputs)
	if (locale === "nl") return nl_ranger_sanction_suspend_hint(inputs)
	if (locale === "pl") return pl_ranger_sanction_suspend_hint(inputs)
	if (locale === "pt") return pt_ranger_sanction_suspend_hint(inputs)
	if (locale === "ru") return ru_ranger_sanction_suspend_hint(inputs)
	if (locale === "sv") return sv_ranger_sanction_suspend_hint(inputs)
	if (locale === "tr") return tr_ranger_sanction_suspend_hint(inputs)
	if (locale === "zh") return zh_ranger_sanction_suspend_hint(inputs)
	if (locale === "ja") return ja_ranger_sanction_suspend_hint(inputs)
	return en_ranger_sanction_suspend_hint(inputs)
});
