/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Badge_UpdatedInputs */

const en_ui_domain_badge_updated = /** @type {(inputs: Ui_Domain_Badge_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Updated`)
};

const es_ui_domain_badge_updated = /** @type {(inputs: Ui_Domain_Badge_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actualizado`)
};

const de_ui_domain_badge_updated = /** @type {(inputs: Ui_Domain_Badge_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktualisiert`)
};

const fr_ui_domain_badge_updated = /** @type {(inputs: Ui_Domain_Badge_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mis à jour`)
};

const it_ui_domain_badge_updated = /** @type {(inputs: Ui_Domain_Badge_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aggiornato`)
};

const nl_ui_domain_badge_updated = /** @type {(inputs: Ui_Domain_Badge_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bijgewerkt`)
};

const pl_ui_domain_badge_updated = /** @type {(inputs: Ui_Domain_Badge_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zaktualizowany`)
};

const pt_ui_domain_badge_updated = /** @type {(inputs: Ui_Domain_Badge_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Atualizado`)
};

const ru_ui_domain_badge_updated = /** @type {(inputs: Ui_Domain_Badge_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Обновлён`)
};

const sv_ui_domain_badge_updated = /** @type {(inputs: Ui_Domain_Badge_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uppdaterad`)
};

const tr_ui_domain_badge_updated = /** @type {(inputs: Ui_Domain_Badge_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Güncellendi`)
};

const zh_ui_domain_badge_updated = /** @type {(inputs: Ui_Domain_Badge_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已更新`)
};

const ja_ui_domain_badge_updated = /** @type {(inputs: Ui_Domain_Badge_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更新あり`)
};

/**
* | output |
* | --- |
* | "Updated" |
*
* @param {Ui_Domain_Badge_UpdatedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_badge_updated = /** @type {((inputs?: Ui_Domain_Badge_UpdatedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Badge_UpdatedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_badge_updated(inputs)
	if (locale === "de") return de_ui_domain_badge_updated(inputs)
	if (locale === "fr") return fr_ui_domain_badge_updated(inputs)
	if (locale === "it") return it_ui_domain_badge_updated(inputs)
	if (locale === "nl") return nl_ui_domain_badge_updated(inputs)
	if (locale === "pl") return pl_ui_domain_badge_updated(inputs)
	if (locale === "pt") return pt_ui_domain_badge_updated(inputs)
	if (locale === "ru") return ru_ui_domain_badge_updated(inputs)
	if (locale === "sv") return sv_ui_domain_badge_updated(inputs)
	if (locale === "tr") return tr_ui_domain_badge_updated(inputs)
	if (locale === "zh") return zh_ui_domain_badge_updated(inputs)
	if (locale === "ja") return ja_ui_domain_badge_updated(inputs)
	return en_ui_domain_badge_updated(inputs)
});
