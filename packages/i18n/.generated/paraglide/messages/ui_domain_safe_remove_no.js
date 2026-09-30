/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Safe_Remove_NoInputs */

const en_ui_domain_safe_remove_no = /** @type {(inputs: Ui_Domain_Safe_Remove_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Not safe mid-save`)
};

const es_ui_domain_safe_remove_no = /** @type {(inputs: Ui_Domain_Safe_Remove_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se puede quitar a mitad de partida`)
};

const de_ui_domain_safe_remove_no = /** @type {(inputs: Ui_Domain_Safe_Remove_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nicht mitten im Spielstand entfernen`)
};

const fr_ui_domain_safe_remove_no = /** @type {(inputs: Ui_Domain_Safe_Remove_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pas de retrait en cours de partie`)
};

const it_ui_domain_safe_remove_no = /** @type {(inputs: Ui_Domain_Safe_Remove_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non rimuovere a partita in corso`)
};

const nl_ui_domain_safe_remove_no = /** @type {(inputs: Ui_Domain_Safe_Remove_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niet veilig midden in een save`)
};

const pl_ui_domain_safe_remove_no = /** @type {(inputs: Ui_Domain_Safe_Remove_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie usuwaj w trakcie zapisu`)
};

const pt_ui_domain_safe_remove_no = /** @type {(inputs: Ui_Domain_Safe_Remove_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não remova no meio do save`)
};

const ru_ui_domain_safe_remove_no = /** @type {(inputs: Ui_Domain_Safe_Remove_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нельзя удалять посреди игры`)
};

const sv_ui_domain_safe_remove_no = /** @type {(inputs: Ui_Domain_Safe_Remove_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inte säker att ta bort mitt i en sparfil`)
};

const tr_ui_domain_safe_remove_no = /** @type {(inputs: Ui_Domain_Safe_Remove_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kayıt ortasında kaldırılmamalı`)
};

const zh_ui_domain_safe_remove_no = /** @type {(inputs: Ui_Domain_Safe_Remove_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不可在存档中途移除`)
};

const ja_ui_domain_safe_remove_no = /** @type {(inputs: Ui_Domain_Safe_Remove_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`セーブ途中での削除は不可`)
};

/**
* | output |
* | --- |
* | "Not safe mid-save" |
*
* @param {Ui_Domain_Safe_Remove_NoInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_safe_remove_no = /** @type {((inputs?: Ui_Domain_Safe_Remove_NoInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Safe_Remove_NoInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_safe_remove_no(inputs)
	if (locale === "de") return de_ui_domain_safe_remove_no(inputs)
	if (locale === "fr") return fr_ui_domain_safe_remove_no(inputs)
	if (locale === "it") return it_ui_domain_safe_remove_no(inputs)
	if (locale === "nl") return nl_ui_domain_safe_remove_no(inputs)
	if (locale === "pl") return pl_ui_domain_safe_remove_no(inputs)
	if (locale === "pt") return pt_ui_domain_safe_remove_no(inputs)
	if (locale === "ru") return ru_ui_domain_safe_remove_no(inputs)
	if (locale === "sv") return sv_ui_domain_safe_remove_no(inputs)
	if (locale === "tr") return tr_ui_domain_safe_remove_no(inputs)
	if (locale === "zh") return zh_ui_domain_safe_remove_no(inputs)
	if (locale === "ja") return ja_ui_domain_safe_remove_no(inputs)
	return en_ui_domain_safe_remove_no(inputs)
});
