/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ version: NonNullable<unknown>, mod: NonNullable<unknown> }} Signals_Status_Version_Changes_RequestedInputs */

const en_signals_status_version_changes_requested = /** @type {(inputs: Signals_Status_Version_Changes_RequestedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`The Rangers asked for changes to version ${i?.version} of ${i?.mod}`)
};

const es_signals_status_version_changes_requested = /** @type {(inputs: Signals_Status_Version_Changes_RequestedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Los guardabosques han pedido cambios en la versión ${i?.version} de ${i?.mod}`)
};

const de_signals_status_version_changes_requested = /** @type {(inputs: Signals_Status_Version_Changes_RequestedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Die Ranger wünschen Änderungen an Version ${i?.version} von ${i?.mod}`)
};

const fr_signals_status_version_changes_requested = /** @type {(inputs: Signals_Status_Version_Changes_RequestedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Les rangers demandent des modifications sur la version ${i?.version} de ${i?.mod}`)
};

const it_signals_status_version_changes_requested = /** @type {(inputs: Signals_Status_Version_Changes_RequestedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`I ranger chiedono modifiche alla versione ${i?.version} di ${i?.mod}`)
};

const nl_signals_status_version_changes_requested = /** @type {(inputs: Signals_Status_Version_Changes_RequestedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`De rangers vragen om wijzigingen in versie ${i?.version} van ${i?.mod}`)
};

const pl_signals_status_version_changes_requested = /** @type {(inputs: Signals_Status_Version_Changes_RequestedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Strażnicy proszą o zmiany w wersji ${i?.version} (${i?.mod})`)
};

const pt_signals_status_version_changes_requested = /** @type {(inputs: Signals_Status_Version_Changes_RequestedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Os guardas pediram alterações na versão ${i?.version} de ${i?.mod}`)
};

const ru_signals_status_version_changes_requested = /** @type {(inputs: Signals_Status_Version_Changes_RequestedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Рейнджеры просят доработать версию ${i?.version} мода ${i?.mod}`)
};

const sv_signals_status_version_changes_requested = /** @type {(inputs: Signals_Status_Version_Changes_RequestedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Rangers vill ha ändringar i version ${i?.version} av ${i?.mod}`)
};

const tr_signals_status_version_changes_requested = /** @type {(inputs: Signals_Status_Version_Changes_RequestedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Korucular ${i?.mod} modunun ${i?.version} sürümünde değişiklik istedi`)
};

const zh_signals_status_version_changes_requested = /** @type {(inputs: Signals_Status_Version_Changes_RequestedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`护林员要求修改 ${i?.mod} 的 ${i?.version} 版本`)
};

const ja_signals_status_version_changes_requested = /** @type {(inputs: Signals_Status_Version_Changes_RequestedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`レンジャーが ${i?.mod} のバージョン ${i?.version} の修正を求めています`)
};

/**
* | output |
* | --- |
* | "The Rangers asked for changes to version {version} of {mod}" |
*
* @param {Signals_Status_Version_Changes_RequestedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_status_version_changes_requested = /** @type {((inputs: Signals_Status_Version_Changes_RequestedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Status_Version_Changes_RequestedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_status_version_changes_requested(inputs)
	if (locale === "de") return de_signals_status_version_changes_requested(inputs)
	if (locale === "fr") return fr_signals_status_version_changes_requested(inputs)
	if (locale === "it") return it_signals_status_version_changes_requested(inputs)
	if (locale === "nl") return nl_signals_status_version_changes_requested(inputs)
	if (locale === "pl") return pl_signals_status_version_changes_requested(inputs)
	if (locale === "pt") return pt_signals_status_version_changes_requested(inputs)
	if (locale === "ru") return ru_signals_status_version_changes_requested(inputs)
	if (locale === "sv") return sv_signals_status_version_changes_requested(inputs)
	if (locale === "tr") return tr_signals_status_version_changes_requested(inputs)
	if (locale === "zh") return zh_signals_status_version_changes_requested(inputs)
	if (locale === "ja") return ja_signals_status_version_changes_requested(inputs)
	return en_signals_status_version_changes_requested(inputs)
});
