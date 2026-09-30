/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Conflicts_NoneInputs */

const en_ui_domain_conflicts_none = /** @type {(inputs: Ui_Domain_Conflicts_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`None known`)
};

const es_ui_domain_conflicts_none = /** @type {(inputs: Ui_Domain_Conflicts_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ninguno conocido`)
};

const de_ui_domain_conflicts_none = /** @type {(inputs: Ui_Domain_Conflicts_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine bekannt`)
};

const fr_ui_domain_conflicts_none = /** @type {(inputs: Ui_Domain_Conflicts_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun connu`)
};

const it_ui_domain_conflicts_none = /** @type {(inputs: Ui_Domain_Conflicts_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessuno noto`)
};

const nl_ui_domain_conflicts_none = /** @type {(inputs: Ui_Domain_Conflicts_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen bekend`)
};

const pl_ui_domain_conflicts_none = /** @type {(inputs: Ui_Domain_Conflicts_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak znanych`)
};

const pt_ui_domain_conflicts_none = /** @type {(inputs: Ui_Domain_Conflicts_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhum conhecido`)
};

const ru_ui_domain_conflicts_none = /** @type {(inputs: Ui_Domain_Conflicts_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Неизвестны`)
};

const sv_ui_domain_conflicts_none = /** @type {(inputs: Ui_Domain_Conflicts_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga kända`)
};

const tr_ui_domain_conflicts_none = /** @type {(inputs: Ui_Domain_Conflicts_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bilinen yok`)
};

const zh_ui_domain_conflicts_none = /** @type {(inputs: Ui_Domain_Conflicts_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`暂无已知冲突`)
};

const ja_ui_domain_conflicts_none = /** @type {(inputs: Ui_Domain_Conflicts_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`既知の競合なし`)
};

/**
* | output |
* | --- |
* | "None known" |
*
* @param {Ui_Domain_Conflicts_NoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_conflicts_none = /** @type {((inputs?: Ui_Domain_Conflicts_NoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Conflicts_NoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_conflicts_none(inputs)
	if (locale === "de") return de_ui_domain_conflicts_none(inputs)
	if (locale === "fr") return fr_ui_domain_conflicts_none(inputs)
	if (locale === "it") return it_ui_domain_conflicts_none(inputs)
	if (locale === "nl") return nl_ui_domain_conflicts_none(inputs)
	if (locale === "pl") return pl_ui_domain_conflicts_none(inputs)
	if (locale === "pt") return pt_ui_domain_conflicts_none(inputs)
	if (locale === "ru") return ru_ui_domain_conflicts_none(inputs)
	if (locale === "sv") return sv_ui_domain_conflicts_none(inputs)
	if (locale === "tr") return tr_ui_domain_conflicts_none(inputs)
	if (locale === "zh") return zh_ui_domain_conflicts_none(inputs)
	if (locale === "ja") return ja_ui_domain_conflicts_none(inputs)
	return en_ui_domain_conflicts_none(inputs)
});
