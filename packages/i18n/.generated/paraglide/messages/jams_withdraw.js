/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_WithdrawInputs */

const en_jams_withdraw = /** @type {(inputs: Jams_WithdrawInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Withdraw entry`)
};

const es_jams_withdraw = /** @type {(inputs: Jams_WithdrawInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retirar participación`)
};

const de_jams_withdraw = /** @type {(inputs: Jams_WithdrawInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beitrag zurückziehen`)
};

const fr_jams_withdraw = /** @type {(inputs: Jams_WithdrawInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retirer la participation`)
};

const it_jams_withdraw = /** @type {(inputs: Jams_WithdrawInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ritira l'iscrizione`)
};

const nl_jams_withdraw = /** @type {(inputs: Jams_WithdrawInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inzending intrekken`)
};

const pl_jams_withdraw = /** @type {(inputs: Jams_WithdrawInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wycofaj zgłoszenie`)
};

const pt_jams_withdraw = /** @type {(inputs: Jams_WithdrawInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retirar inscrição`)
};

const ru_jams_withdraw = /** @type {(inputs: Jams_WithdrawInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отозвать работу`)
};

const sv_jams_withdraw = /** @type {(inputs: Jams_WithdrawInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dra tillbaka bidraget`)
};

const tr_jams_withdraw = /** @type {(inputs: Jams_WithdrawInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başvuruyu geri çek`)
};

const zh_jams_withdraw = /** @type {(inputs: Jams_WithdrawInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`撤回作品`)
};

const ja_jams_withdraw = /** @type {(inputs: Jams_WithdrawInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`応募を取り下げる`)
};

/**
* | output |
* | --- |
* | "Withdraw entry" |
*
* @param {Jams_WithdrawInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_withdraw = /** @type {((inputs?: Jams_WithdrawInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_WithdrawInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_withdraw(inputs)
	if (locale === "de") return de_jams_withdraw(inputs)
	if (locale === "fr") return fr_jams_withdraw(inputs)
	if (locale === "it") return it_jams_withdraw(inputs)
	if (locale === "nl") return nl_jams_withdraw(inputs)
	if (locale === "pl") return pl_jams_withdraw(inputs)
	if (locale === "pt") return pt_jams_withdraw(inputs)
	if (locale === "ru") return ru_jams_withdraw(inputs)
	if (locale === "sv") return sv_jams_withdraw(inputs)
	if (locale === "tr") return tr_jams_withdraw(inputs)
	if (locale === "zh") return zh_jams_withdraw(inputs)
	if (locale === "ja") return ja_jams_withdraw(inputs)
	return en_jams_withdraw(inputs)
});
