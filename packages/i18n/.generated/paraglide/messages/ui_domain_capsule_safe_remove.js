/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Capsule_Safe_RemoveInputs */

const en_ui_domain_capsule_safe_remove = /** @type {(inputs: Ui_Domain_Capsule_Safe_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remove mid-save`)
};

const es_ui_domain_capsule_safe_remove = /** @type {(inputs: Ui_Domain_Capsule_Safe_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quitar a mitad de partida`)
};

const de_ui_domain_capsule_safe_remove = /** @type {(inputs: Ui_Domain_Capsule_Safe_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mitten im Spielstand entfernen`)
};

const fr_ui_domain_capsule_safe_remove = /** @type {(inputs: Ui_Domain_Capsule_Safe_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retrait en cours de partie`)
};

const it_ui_domain_capsule_safe_remove = /** @type {(inputs: Ui_Domain_Capsule_Safe_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rimozione a partita in corso`)
};

const nl_ui_domain_capsule_safe_remove = /** @type {(inputs: Ui_Domain_Capsule_Safe_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verwijderen midden in een save`)
};

const pl_ui_domain_capsule_safe_remove = /** @type {(inputs: Ui_Domain_Capsule_Safe_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usuwanie w trakcie zapisu`)
};

const pt_ui_domain_capsule_safe_remove = /** @type {(inputs: Ui_Domain_Capsule_Safe_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remover no meio do save`)
};

const ru_ui_domain_capsule_safe_remove = /** @type {(inputs: Ui_Domain_Capsule_Safe_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Удаление посреди игры`)
};

const sv_ui_domain_capsule_safe_remove = /** @type {(inputs: Ui_Domain_Capsule_Safe_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ta bort mitt i en sparfil`)
};

const tr_ui_domain_capsule_safe_remove = /** @type {(inputs: Ui_Domain_Capsule_Safe_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kayıt ortasında kaldırma`)
};

const zh_ui_domain_capsule_safe_remove = /** @type {(inputs: Ui_Domain_Capsule_Safe_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`存档中途移除`)
};

const ja_ui_domain_capsule_safe_remove = /** @type {(inputs: Ui_Domain_Capsule_Safe_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`セーブ途中での削除`)
};

/**
* | output |
* | --- |
* | "Remove mid-save" |
*
* @param {Ui_Domain_Capsule_Safe_RemoveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_capsule_safe_remove = /** @type {((inputs?: Ui_Domain_Capsule_Safe_RemoveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Capsule_Safe_RemoveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_capsule_safe_remove(inputs)
	if (locale === "de") return de_ui_domain_capsule_safe_remove(inputs)
	if (locale === "fr") return fr_ui_domain_capsule_safe_remove(inputs)
	if (locale === "it") return it_ui_domain_capsule_safe_remove(inputs)
	if (locale === "nl") return nl_ui_domain_capsule_safe_remove(inputs)
	if (locale === "pl") return pl_ui_domain_capsule_safe_remove(inputs)
	if (locale === "pt") return pt_ui_domain_capsule_safe_remove(inputs)
	if (locale === "ru") return ru_ui_domain_capsule_safe_remove(inputs)
	if (locale === "sv") return sv_ui_domain_capsule_safe_remove(inputs)
	if (locale === "tr") return tr_ui_domain_capsule_safe_remove(inputs)
	if (locale === "zh") return zh_ui_domain_capsule_safe_remove(inputs)
	if (locale === "ja") return ja_ui_domain_capsule_safe_remove(inputs)
	return en_ui_domain_capsule_safe_remove(inputs)
});
