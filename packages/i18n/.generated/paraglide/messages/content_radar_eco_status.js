/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ status: NonNullable<unknown> }} Content_Radar_Eco_StatusInputs */

const en_content_radar_eco_status = /** @type {(inputs: Content_Radar_Eco_StatusInputs) => LocalizedString} */ (i) => {
	if (i?.status === "works") return /** @type {LocalizedString} */ (`Works`);
	if (i?.status === "partial") return /** @type {LocalizedString} */ (`Partly works`);
	if (i?.status === "broken") return /** @type {LocalizedString} */ (`Broken`);
	return /** @type {LocalizedString} */ (`Unknown`)
	
};

const es_content_radar_eco_status = /** @type {(inputs: Content_Radar_Eco_StatusInputs) => LocalizedString} */ (i) => {
	if (i?.status === "works") return /** @type {LocalizedString} */ (`Funciona`);
	if (i?.status === "partial") return /** @type {LocalizedString} */ (`Funciona en parte`);
	if (i?.status === "broken") return /** @type {LocalizedString} */ (`Roto`);
	return /** @type {LocalizedString} */ (`Desconocido`)
	
};

const de_content_radar_eco_status = /** @type {(inputs: Content_Radar_Eco_StatusInputs) => LocalizedString} */ (i) => {
	if (i?.status === "works") return /** @type {LocalizedString} */ (`Funktioniert`);
	if (i?.status === "partial") return /** @type {LocalizedString} */ (`Funktioniert teilweise`);
	if (i?.status === "broken") return /** @type {LocalizedString} */ (`Kaputt`);
	return /** @type {LocalizedString} */ (`Unbekannt`)
	
};

const fr_content_radar_eco_status = /** @type {(inputs: Content_Radar_Eco_StatusInputs) => LocalizedString} */ (i) => {
	if (i?.status === "works") return /** @type {LocalizedString} */ (`Fonctionne`);
	if (i?.status === "partial") return /** @type {LocalizedString} */ (`Fonctionne en partie`);
	if (i?.status === "broken") return /** @type {LocalizedString} */ (`Cassé`);
	return /** @type {LocalizedString} */ (`Inconnu`)
	
};

const it_content_radar_eco_status = /** @type {(inputs: Content_Radar_Eco_StatusInputs) => LocalizedString} */ (i) => {
	if (i?.status === "works") return /** @type {LocalizedString} */ (`Funziona`);
	if (i?.status === "partial") return /** @type {LocalizedString} */ (`Funziona in parte`);
	if (i?.status === "broken") return /** @type {LocalizedString} */ (`Rotto`);
	return /** @type {LocalizedString} */ (`Sconosciuto`)
	
};

const nl_content_radar_eco_status = /** @type {(inputs: Content_Radar_Eco_StatusInputs) => LocalizedString} */ (i) => {
	if (i?.status === "works") return /** @type {LocalizedString} */ (`Werkt`);
	if (i?.status === "partial") return /** @type {LocalizedString} */ (`Werkt deels`);
	if (i?.status === "broken") return /** @type {LocalizedString} */ (`Kapot`);
	return /** @type {LocalizedString} */ (`Onbekend`)
	
};

const pl_content_radar_eco_status = /** @type {(inputs: Content_Radar_Eco_StatusInputs) => LocalizedString} */ (i) => {
	if (i?.status === "works") return /** @type {LocalizedString} */ (`Działa`);
	if (i?.status === "partial") return /** @type {LocalizedString} */ (`Działa częściowo`);
	if (i?.status === "broken") return /** @type {LocalizedString} */ (`Zepsuty`);
	return /** @type {LocalizedString} */ (`Nieznany`)
	
};

const pt_content_radar_eco_status = /** @type {(inputs: Content_Radar_Eco_StatusInputs) => LocalizedString} */ (i) => {
	if (i?.status === "works") return /** @type {LocalizedString} */ (`Funciona`);
	if (i?.status === "partial") return /** @type {LocalizedString} */ (`Funciona em parte`);
	if (i?.status === "broken") return /** @type {LocalizedString} */ (`Quebrado`);
	return /** @type {LocalizedString} */ (`Desconhecido`)
	
};

const ru_content_radar_eco_status = /** @type {(inputs: Content_Radar_Eco_StatusInputs) => LocalizedString} */ (i) => {
	if (i?.status === "works") return /** @type {LocalizedString} */ (`Работает`);
	if (i?.status === "partial") return /** @type {LocalizedString} */ (`Работает частично`);
	if (i?.status === "broken") return /** @type {LocalizedString} */ (`Сломан`);
	return /** @type {LocalizedString} */ (`Неизвестно`)
	
};

const sv_content_radar_eco_status = /** @type {(inputs: Content_Radar_Eco_StatusInputs) => LocalizedString} */ (i) => {
	if (i?.status === "works") return /** @type {LocalizedString} */ (`Fungerar`);
	if (i?.status === "partial") return /** @type {LocalizedString} */ (`Fungerar delvis`);
	if (i?.status === "broken") return /** @type {LocalizedString} */ (`Trasig`);
	return /** @type {LocalizedString} */ (`Okänd`)
	
};

const tr_content_radar_eco_status = /** @type {(inputs: Content_Radar_Eco_StatusInputs) => LocalizedString} */ (i) => {
	if (i?.status === "works") return /** @type {LocalizedString} */ (`Çalışıyor`);
	if (i?.status === "partial") return /** @type {LocalizedString} */ (`Kısmen çalışıyor`);
	if (i?.status === "broken") return /** @type {LocalizedString} */ (`Bozuk`);
	return /** @type {LocalizedString} */ (`Bilinmiyor`)
	
};

const zh_content_radar_eco_status = /** @type {(inputs: Content_Radar_Eco_StatusInputs) => LocalizedString} */ (i) => {
	if (i?.status === "works") return /** @type {LocalizedString} */ (`可用`);
	if (i?.status === "partial") return /** @type {LocalizedString} */ (`部分可用`);
	if (i?.status === "broken") return /** @type {LocalizedString} */ (`失效`);
	return /** @type {LocalizedString} */ (`未知`)
	
};

const ja_content_radar_eco_status = /** @type {(inputs: Content_Radar_Eco_StatusInputs) => LocalizedString} */ (i) => {
	if (i?.status === "works") return /** @type {LocalizedString} */ (`動作`);
	if (i?.status === "partial") return /** @type {LocalizedString} */ (`一部動作`);
	if (i?.status === "broken") return /** @type {LocalizedString} */ (`不具合`);
	return /** @type {LocalizedString} */ (`不明`)
	
};

/**
* | status | output |
* | --- | --- |
* | "works" | "Works" |
* | "partial" | "Partly works" |
* | "broken" | "Broken" |
* | * | "Unknown" |
*
* @param {Content_Radar_Eco_StatusInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_radar_eco_status = /** @type {((inputs: Content_Radar_Eco_StatusInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_Eco_StatusInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_radar_eco_status(inputs)
	if (locale === "de") return de_content_radar_eco_status(inputs)
	if (locale === "fr") return fr_content_radar_eco_status(inputs)
	if (locale === "it") return it_content_radar_eco_status(inputs)
	if (locale === "nl") return nl_content_radar_eco_status(inputs)
	if (locale === "pl") return pl_content_radar_eco_status(inputs)
	if (locale === "pt") return pt_content_radar_eco_status(inputs)
	if (locale === "ru") return ru_content_radar_eco_status(inputs)
	if (locale === "sv") return sv_content_radar_eco_status(inputs)
	if (locale === "tr") return tr_content_radar_eco_status(inputs)
	if (locale === "zh") return zh_content_radar_eco_status(inputs)
	if (locale === "ja") return ja_content_radar_eco_status(inputs)
	return en_content_radar_eco_status(inputs)
});
