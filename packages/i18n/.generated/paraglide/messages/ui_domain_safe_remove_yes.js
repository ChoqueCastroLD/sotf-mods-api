/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Safe_Remove_YesInputs */

const en_ui_domain_safe_remove_yes = /** @type {(inputs: Ui_Domain_Safe_Remove_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Safe mid-save`)
};

const es_ui_domain_safe_remove_yes = /** @type {(inputs: Ui_Domain_Safe_Remove_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se puede quitar a mitad de partida`)
};

const de_ui_domain_safe_remove_yes = /** @type {(inputs: Ui_Domain_Safe_Remove_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mitten im Spielstand entfernbar`)
};

const fr_ui_domain_safe_remove_yes = /** @type {(inputs: Ui_Domain_Safe_Remove_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retrait possible en cours de partie`)
};

const it_ui_domain_safe_remove_yes = /** @type {(inputs: Ui_Domain_Safe_Remove_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rimovibile a partita in corso`)
};

const nl_ui_domain_safe_remove_yes = /** @type {(inputs: Ui_Domain_Safe_Remove_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veilig midden in een save`)
};

const pl_ui_domain_safe_remove_yes = /** @type {(inputs: Ui_Domain_Safe_Remove_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Można usunąć w trakcie zapisu`)
};

const pt_ui_domain_safe_remove_yes = /** @type {(inputs: Ui_Domain_Safe_Remove_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pode remover no meio do save`)
};

const ru_ui_domain_safe_remove_yes = /** @type {(inputs: Ui_Domain_Safe_Remove_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Можно удалить посреди игры`)
};

const sv_ui_domain_safe_remove_yes = /** @type {(inputs: Ui_Domain_Safe_Remove_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Säker att ta bort mitt i en sparfil`)
};

const tr_ui_domain_safe_remove_yes = /** @type {(inputs: Ui_Domain_Safe_Remove_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kayıt ortasında güvenle kaldırılabilir`)
};

const zh_ui_domain_safe_remove_yes = /** @type {(inputs: Ui_Domain_Safe_Remove_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`可在存档中途安全移除`)
};

const ja_ui_domain_safe_remove_yes = /** @type {(inputs: Ui_Domain_Safe_Remove_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`セーブ途中でも削除 OK`)
};

/**
* | output |
* | --- |
* | "Safe mid-save" |
*
* @param {Ui_Domain_Safe_Remove_YesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_safe_remove_yes = /** @type {((inputs?: Ui_Domain_Safe_Remove_YesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Safe_Remove_YesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_safe_remove_yes(inputs)
	if (locale === "de") return de_ui_domain_safe_remove_yes(inputs)
	if (locale === "fr") return fr_ui_domain_safe_remove_yes(inputs)
	if (locale === "it") return it_ui_domain_safe_remove_yes(inputs)
	if (locale === "nl") return nl_ui_domain_safe_remove_yes(inputs)
	if (locale === "pl") return pl_ui_domain_safe_remove_yes(inputs)
	if (locale === "pt") return pt_ui_domain_safe_remove_yes(inputs)
	if (locale === "ru") return ru_ui_domain_safe_remove_yes(inputs)
	if (locale === "sv") return sv_ui_domain_safe_remove_yes(inputs)
	if (locale === "tr") return tr_ui_domain_safe_remove_yes(inputs)
	if (locale === "zh") return zh_ui_domain_safe_remove_yes(inputs)
	if (locale === "ja") return ja_ui_domain_safe_remove_yes(inputs)
	return en_ui_domain_safe_remove_yes(inputs)
});
