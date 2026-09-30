/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ mod: NonNullable<unknown> }} Signals_Compat_AcknowledgedInputs */

const en_signals_compat_acknowledged = /** @type {(inputs: Signals_Compat_AcknowledgedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`The author of ${i?.mod} saw your field report`)
};

const es_signals_compat_acknowledged = /** @type {(inputs: Signals_Compat_AcknowledgedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`El autor de ${i?.mod} ha visto tu informe de campo`)
};

const de_signals_compat_acknowledged = /** @type {(inputs: Signals_Compat_AcknowledgedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Der Autor von ${i?.mod} hat deinen Feldbericht gesehen`)
};

const fr_signals_compat_acknowledged = /** @type {(inputs: Signals_Compat_AcknowledgedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`L’auteur de ${i?.mod} a vu votre rapport de terrain`)
};

const it_signals_compat_acknowledged = /** @type {(inputs: Signals_Compat_AcknowledgedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`L’autore di ${i?.mod} ha visto il tuo rapporto sul campo`)
};

const nl_signals_compat_acknowledged = /** @type {(inputs: Signals_Compat_AcknowledgedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`De maker van ${i?.mod} heeft je veldrapport gezien`)
};

const pl_signals_compat_acknowledged = /** @type {(inputs: Signals_Compat_AcknowledgedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Autor ${i?.mod} zobaczył twój raport terenowy`)
};

const pt_signals_compat_acknowledged = /** @type {(inputs: Signals_Compat_AcknowledgedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`O autor de ${i?.mod} viu seu relatório de campo`)
};

const ru_signals_compat_acknowledged = /** @type {(inputs: Signals_Compat_AcknowledgedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Автор ${i?.mod} увидел ваш полевой отчёт`)
};

const sv_signals_compat_acknowledged = /** @type {(inputs: Signals_Compat_AcknowledgedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Skaparen av ${i?.mod} har sett din fältrapport`)
};

const tr_signals_compat_acknowledged = /** @type {(inputs: Signals_Compat_AcknowledgedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} yapımcısı saha raporunu gördü`)
};

const zh_signals_compat_acknowledged = /** @type {(inputs: Signals_Compat_AcknowledgedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} 的作者已看到你的实地报告`)
};

const ja_signals_compat_acknowledged = /** @type {(inputs: Signals_Compat_AcknowledgedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} の作者があなたの現地レポートを確認しました`)
};

/**
* | output |
* | --- |
* | "The author of {mod} saw your field report" |
*
* @param {Signals_Compat_AcknowledgedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_compat_acknowledged = /** @type {((inputs: Signals_Compat_AcknowledgedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Compat_AcknowledgedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_compat_acknowledged(inputs)
	if (locale === "de") return de_signals_compat_acknowledged(inputs)
	if (locale === "fr") return fr_signals_compat_acknowledged(inputs)
	if (locale === "it") return it_signals_compat_acknowledged(inputs)
	if (locale === "nl") return nl_signals_compat_acknowledged(inputs)
	if (locale === "pl") return pl_signals_compat_acknowledged(inputs)
	if (locale === "pt") return pt_signals_compat_acknowledged(inputs)
	if (locale === "ru") return ru_signals_compat_acknowledged(inputs)
	if (locale === "sv") return sv_signals_compat_acknowledged(inputs)
	if (locale === "tr") return tr_signals_compat_acknowledged(inputs)
	if (locale === "zh") return zh_signals_compat_acknowledged(inputs)
	if (locale === "ja") return ja_signals_compat_acknowledged(inputs)
	return en_signals_compat_acknowledged(inputs)
});
