/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Scan_Override_ConfirmInputs */

const en_ranger_scan_override_confirm = /** @type {(inputs: Ranger_Scan_Override_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Save verdict`)
};

const es_ranger_scan_override_confirm = /** @type {(inputs: Ranger_Scan_Override_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guardar veredicto`)
};

const de_ranger_scan_override_confirm = /** @type {(inputs: Ranger_Scan_Override_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Urteil speichern`)
};

const fr_ranger_scan_override_confirm = /** @type {(inputs: Ranger_Scan_Override_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enregistrer le verdict`)
};

const it_ranger_scan_override_confirm = /** @type {(inputs: Ranger_Scan_Override_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salva il verdetto`)
};

const nl_ranger_scan_override_confirm = /** @type {(inputs: Ranger_Scan_Override_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oordeel opslaan`)
};

const pl_ranger_scan_override_confirm = /** @type {(inputs: Ranger_Scan_Override_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zapisz werdykt`)
};

const pt_ranger_scan_override_confirm = /** @type {(inputs: Ranger_Scan_Override_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salvar veredito`)
};

const ru_ranger_scan_override_confirm = /** @type {(inputs: Ranger_Scan_Override_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сохранить вердикт`)
};

const sv_ranger_scan_override_confirm = /** @type {(inputs: Ranger_Scan_Override_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spara utlåtande`)
};

const tr_ranger_scan_override_confirm = /** @type {(inputs: Ranger_Scan_Override_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kararı kaydet`)
};

const zh_ranger_scan_override_confirm = /** @type {(inputs: Ranger_Scan_Override_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存判定`)
};

const ja_ranger_scan_override_confirm = /** @type {(inputs: Ranger_Scan_Override_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`判定を保存`)
};

/**
* | output |
* | --- |
* | "Save verdict" |
*
* @param {Ranger_Scan_Override_ConfirmInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_scan_override_confirm = /** @type {((inputs?: Ranger_Scan_Override_ConfirmInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Scan_Override_ConfirmInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_scan_override_confirm(inputs)
	if (locale === "de") return de_ranger_scan_override_confirm(inputs)
	if (locale === "fr") return fr_ranger_scan_override_confirm(inputs)
	if (locale === "it") return it_ranger_scan_override_confirm(inputs)
	if (locale === "nl") return nl_ranger_scan_override_confirm(inputs)
	if (locale === "pl") return pl_ranger_scan_override_confirm(inputs)
	if (locale === "pt") return pt_ranger_scan_override_confirm(inputs)
	if (locale === "ru") return ru_ranger_scan_override_confirm(inputs)
	if (locale === "sv") return sv_ranger_scan_override_confirm(inputs)
	if (locale === "tr") return tr_ranger_scan_override_confirm(inputs)
	if (locale === "zh") return zh_ranger_scan_override_confirm(inputs)
	if (locale === "ja") return ja_ranger_scan_override_confirm(inputs)
	return en_ranger_scan_override_confirm(inputs)
});
