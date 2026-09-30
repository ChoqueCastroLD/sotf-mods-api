/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Scan_Override_TitleInputs */

const en_ranger_scan_override_title = /** @type {(inputs: Ranger_Scan_Override_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Override the scan verdict`)
};

const es_ranger_scan_override_title = /** @type {(inputs: Ranger_Scan_Override_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cambiar el veredicto del análisis`)
};

const de_ranger_scan_override_title = /** @type {(inputs: Ranger_Scan_Override_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scan-Urteil ändern`)
};

const fr_ranger_scan_override_title = /** @type {(inputs: Ranger_Scan_Override_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modifier le verdict de l’analyse`)
};

const it_ranger_scan_override_title = /** @type {(inputs: Ranger_Scan_Override_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cambia il verdetto dell’analisi`)
};

const nl_ranger_scan_override_title = /** @type {(inputs: Ranger_Scan_Override_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Het scanoordeel wijzigen`)
};

const pl_ranger_scan_override_title = /** @type {(inputs: Ranger_Scan_Override_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zmień werdykt skanu`)
};

const pt_ranger_scan_override_title = /** @type {(inputs: Ranger_Scan_Override_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alterar o veredito da análise`)
};

const ru_ranger_scan_override_title = /** @type {(inputs: Ranger_Scan_Override_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Изменить вердикт сканирования`)
};

const sv_ranger_scan_override_title = /** @type {(inputs: Ranger_Scan_Override_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ändra skanningens utlåtande`)
};

const tr_ranger_scan_override_title = /** @type {(inputs: Ranger_Scan_Override_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tarama kararını değiştir`)
};

const zh_ranger_scan_override_title = /** @type {(inputs: Ranger_Scan_Override_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更改扫描判定`)
};

const ja_ranger_scan_override_title = /** @type {(inputs: Ranger_Scan_Override_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`スキャン判定を変更`)
};

/**
* | output |
* | --- |
* | "Override the scan verdict" |
*
* @param {Ranger_Scan_Override_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_scan_override_title = /** @type {((inputs?: Ranger_Scan_Override_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Scan_Override_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_scan_override_title(inputs)
	if (locale === "de") return de_ranger_scan_override_title(inputs)
	if (locale === "fr") return fr_ranger_scan_override_title(inputs)
	if (locale === "it") return it_ranger_scan_override_title(inputs)
	if (locale === "nl") return nl_ranger_scan_override_title(inputs)
	if (locale === "pl") return pl_ranger_scan_override_title(inputs)
	if (locale === "pt") return pt_ranger_scan_override_title(inputs)
	if (locale === "ru") return ru_ranger_scan_override_title(inputs)
	if (locale === "sv") return sv_ranger_scan_override_title(inputs)
	if (locale === "tr") return tr_ranger_scan_override_title(inputs)
	if (locale === "zh") return zh_ranger_scan_override_title(inputs)
	if (locale === "ja") return ja_ranger_scan_override_title(inputs)
	return en_ranger_scan_override_title(inputs)
});
