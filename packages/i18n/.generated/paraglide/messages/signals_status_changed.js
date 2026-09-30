/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ mod: NonNullable<unknown> }} Signals_Status_ChangedInputs */

const en_signals_status_changed = /** @type {(inputs: Signals_Status_ChangedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`The status of ${i?.mod} changed`)
};

const es_signals_status_changed = /** @type {(inputs: Signals_Status_ChangedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`El estado de ${i?.mod} ha cambiado`)
};

const de_signals_status_changed = /** @type {(inputs: Signals_Status_ChangedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Der Status von ${i?.mod} hat sich geändert`)
};

const fr_signals_status_changed = /** @type {(inputs: Signals_Status_ChangedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Le statut de ${i?.mod} a changé`)
};

const it_signals_status_changed = /** @type {(inputs: Signals_Status_ChangedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Lo stato di ${i?.mod} è cambiato`)
};

const nl_signals_status_changed = /** @type {(inputs: Signals_Status_ChangedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`De status van ${i?.mod} is gewijzigd`)
};

const pl_signals_status_changed = /** @type {(inputs: Signals_Status_ChangedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Status ${i?.mod} się zmienił`)
};

const pt_signals_status_changed = /** @type {(inputs: Signals_Status_ChangedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`O status de ${i?.mod} mudou`)
};

const ru_signals_status_changed = /** @type {(inputs: Signals_Status_ChangedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Статус ${i?.mod} изменился`)
};

const sv_signals_status_changed = /** @type {(inputs: Signals_Status_ChangedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Statusen för ${i?.mod} har ändrats`)
};

const tr_signals_status_changed = /** @type {(inputs: Signals_Status_ChangedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} modunun durumu değişti`)
};

const zh_signals_status_changed = /** @type {(inputs: Signals_Status_ChangedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} 的状态已变更`)
};

const ja_signals_status_changed = /** @type {(inputs: Signals_Status_ChangedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} のステータスが変わりました`)
};

/**
* | output |
* | --- |
* | "The status of {mod} changed" |
*
* @param {Signals_Status_ChangedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_status_changed = /** @type {((inputs: Signals_Status_ChangedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Status_ChangedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_status_changed(inputs)
	if (locale === "de") return de_signals_status_changed(inputs)
	if (locale === "fr") return fr_signals_status_changed(inputs)
	if (locale === "it") return it_signals_status_changed(inputs)
	if (locale === "nl") return nl_signals_status_changed(inputs)
	if (locale === "pl") return pl_signals_status_changed(inputs)
	if (locale === "pt") return pt_signals_status_changed(inputs)
	if (locale === "ru") return ru_signals_status_changed(inputs)
	if (locale === "sv") return sv_signals_status_changed(inputs)
	if (locale === "tr") return tr_signals_status_changed(inputs)
	if (locale === "zh") return zh_signals_status_changed(inputs)
	if (locale === "ja") return ja_signals_status_changed(inputs)
	return en_signals_status_changed(inputs)
});
