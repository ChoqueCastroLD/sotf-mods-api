/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Report_By_UnknownInputs */

const en_ranger_report_by_unknown = /** @type {(inputs: Ranger_Report_By_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reporter deleted their account`)
};

const es_ranger_report_by_unknown = /** @type {(inputs: Ranger_Report_By_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quien reportó borró su cuenta`)
};

const de_ranger_report_by_unknown = /** @type {(inputs: Ranger_Report_By_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Der Meldende hat sein Konto gelöscht`)
};

const fr_ranger_report_by_unknown = /** @type {(inputs: Ranger_Report_By_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’auteur du signalement a supprimé son compte`)
};

const it_ranger_report_by_unknown = /** @type {(inputs: Ranger_Report_By_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chi ha segnalato ha eliminato l’account`)
};

const nl_ranger_report_by_unknown = /** @type {(inputs: Ranger_Report_By_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De melder heeft zijn account verwijderd`)
};

const pl_ranger_report_by_unknown = /** @type {(inputs: Ranger_Report_By_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zgłaszający usunął konto`)
};

const pt_ranger_report_by_unknown = /** @type {(inputs: Ranger_Report_By_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quem denunciou excluiu a conta`)
};

const ru_ranger_report_by_unknown = /** @type {(inputs: Ranger_Report_By_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Автор жалобы удалил аккаунт`)
};

const sv_ranger_report_by_unknown = /** @type {(inputs: Ranger_Report_By_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anmälaren har raderat sitt konto`)
};

const tr_ranger_report_by_unknown = /** @type {(inputs: Ranger_Report_By_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Şikâyet eden hesabını sildi`)
};

const zh_ranger_report_by_unknown = /** @type {(inputs: Ranger_Report_By_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`举报人已删除账号`)
};

const ja_ranger_report_by_unknown = /** @type {(inputs: Ranger_Report_By_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`報告者はアカウントを削除しました`)
};

/**
* | output |
* | --- |
* | "Reporter deleted their account" |
*
* @param {Ranger_Report_By_UnknownInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_report_by_unknown = /** @type {((inputs?: Ranger_Report_By_UnknownInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Report_By_UnknownInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_report_by_unknown(inputs)
	if (locale === "de") return de_ranger_report_by_unknown(inputs)
	if (locale === "fr") return fr_ranger_report_by_unknown(inputs)
	if (locale === "it") return it_ranger_report_by_unknown(inputs)
	if (locale === "nl") return nl_ranger_report_by_unknown(inputs)
	if (locale === "pl") return pl_ranger_report_by_unknown(inputs)
	if (locale === "pt") return pt_ranger_report_by_unknown(inputs)
	if (locale === "ru") return ru_ranger_report_by_unknown(inputs)
	if (locale === "sv") return sv_ranger_report_by_unknown(inputs)
	if (locale === "tr") return tr_ranger_report_by_unknown(inputs)
	if (locale === "zh") return zh_ranger_report_by_unknown(inputs)
	if (locale === "ja") return ja_ranger_report_by_unknown(inputs)
	return en_ranger_report_by_unknown(inputs)
});
