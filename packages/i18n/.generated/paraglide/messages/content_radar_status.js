/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ status: NonNullable<unknown> }} Content_Radar_StatusInputs */

const en_content_radar_status = /** @type {(inputs: Content_Radar_StatusInputs) => LocalizedString} */ (i) => {
	if (i?.status === "works") return /** @type {LocalizedString} */ (`Works`);
	if (i?.status === "mixed") return /** @type {LocalizedString} */ (`Mixed`);
	if (i?.status === "broken") return /** @type {LocalizedString} */ (`Broken`);
	return /** @type {LocalizedString} */ (`No data`)
	
};

const es_content_radar_status = /** @type {(inputs: Content_Radar_StatusInputs) => LocalizedString} */ (i) => {
	if (i?.status === "works") return /** @type {LocalizedString} */ (`Funciona`);
	if (i?.status === "mixed") return /** @type {LocalizedString} */ (`Mixto`);
	if (i?.status === "broken") return /** @type {LocalizedString} */ (`Roto`);
	return /** @type {LocalizedString} */ (`Sin datos`)
	
};

const de_content_radar_status = /** @type {(inputs: Content_Radar_StatusInputs) => LocalizedString} */ (i) => {
	if (i?.status === "works") return /** @type {LocalizedString} */ (`Funktioniert`);
	if (i?.status === "mixed") return /** @type {LocalizedString} */ (`Gemischt`);
	if (i?.status === "broken") return /** @type {LocalizedString} */ (`Kaputt`);
	return /** @type {LocalizedString} */ (`Keine Daten`)
	
};

const fr_content_radar_status = /** @type {(inputs: Content_Radar_StatusInputs) => LocalizedString} */ (i) => {
	if (i?.status === "works") return /** @type {LocalizedString} */ (`Fonctionne`);
	if (i?.status === "mixed") return /** @type {LocalizedString} */ (`Mitigé`);
	if (i?.status === "broken") return /** @type {LocalizedString} */ (`Cassé`);
	return /** @type {LocalizedString} */ (`Aucune donnée`)
	
};

const it_content_radar_status = /** @type {(inputs: Content_Radar_StatusInputs) => LocalizedString} */ (i) => {
	if (i?.status === "works") return /** @type {LocalizedString} */ (`Funziona`);
	if (i?.status === "mixed") return /** @type {LocalizedString} */ (`Misto`);
	if (i?.status === "broken") return /** @type {LocalizedString} */ (`Rotta`);
	return /** @type {LocalizedString} */ (`Nessun dato`)
	
};

const nl_content_radar_status = /** @type {(inputs: Content_Radar_StatusInputs) => LocalizedString} */ (i) => {
	if (i?.status === "works") return /** @type {LocalizedString} */ (`Werkt`);
	if (i?.status === "mixed") return /** @type {LocalizedString} */ (`Gemengd`);
	if (i?.status === "broken") return /** @type {LocalizedString} */ (`Kapot`);
	return /** @type {LocalizedString} */ (`Geen gegevens`)
	
};

const pl_content_radar_status = /** @type {(inputs: Content_Radar_StatusInputs) => LocalizedString} */ (i) => {
	if (i?.status === "works") return /** @type {LocalizedString} */ (`Działa`);
	if (i?.status === "mixed") return /** @type {LocalizedString} */ (`Mieszane`);
	if (i?.status === "broken") return /** @type {LocalizedString} */ (`Zepsuty`);
	return /** @type {LocalizedString} */ (`Brak danych`)
	
};

const pt_content_radar_status = /** @type {(inputs: Content_Radar_StatusInputs) => LocalizedString} */ (i) => {
	if (i?.status === "works") return /** @type {LocalizedString} */ (`Funciona`);
	if (i?.status === "mixed") return /** @type {LocalizedString} */ (`Misto`);
	if (i?.status === "broken") return /** @type {LocalizedString} */ (`Quebrado`);
	return /** @type {LocalizedString} */ (`Sem dados`)
	
};

const ru_content_radar_status = /** @type {(inputs: Content_Radar_StatusInputs) => LocalizedString} */ (i) => {
	if (i?.status === "works") return /** @type {LocalizedString} */ (`Работает`);
	if (i?.status === "mixed") return /** @type {LocalizedString} */ (`Неоднозначно`);
	if (i?.status === "broken") return /** @type {LocalizedString} */ (`Сломан`);
	return /** @type {LocalizedString} */ (`Нет данных`)
	
};

const sv_content_radar_status = /** @type {(inputs: Content_Radar_StatusInputs) => LocalizedString} */ (i) => {
	if (i?.status === "works") return /** @type {LocalizedString} */ (`Fungerar`);
	if (i?.status === "mixed") return /** @type {LocalizedString} */ (`Blandat`);
	if (i?.status === "broken") return /** @type {LocalizedString} */ (`Trasig`);
	return /** @type {LocalizedString} */ (`Inga data`)
	
};

const tr_content_radar_status = /** @type {(inputs: Content_Radar_StatusInputs) => LocalizedString} */ (i) => {
	if (i?.status === "works") return /** @type {LocalizedString} */ (`Çalışıyor`);
	if (i?.status === "mixed") return /** @type {LocalizedString} */ (`Karışık`);
	if (i?.status === "broken") return /** @type {LocalizedString} */ (`Bozuk`);
	return /** @type {LocalizedString} */ (`Veri yok`)
	
};

const zh_content_radar_status = /** @type {(inputs: Content_Radar_StatusInputs) => LocalizedString} */ (i) => {
	if (i?.status === "works") return /** @type {LocalizedString} */ (`可用`);
	if (i?.status === "mixed") return /** @type {LocalizedString} */ (`不一`);
	if (i?.status === "broken") return /** @type {LocalizedString} */ (`失效`);
	return /** @type {LocalizedString} */ (`无数据`)
	
};

const ja_content_radar_status = /** @type {(inputs: Content_Radar_StatusInputs) => LocalizedString} */ (i) => {
	if (i?.status === "works") return /** @type {LocalizedString} */ (`動作`);
	if (i?.status === "mixed") return /** @type {LocalizedString} */ (`まちまち`);
	if (i?.status === "broken") return /** @type {LocalizedString} */ (`不具合`);
	return /** @type {LocalizedString} */ (`データなし`)
	
};

/**
* | status | output |
* | --- | --- |
* | "works" | "Works" |
* | "mixed" | "Mixed" |
* | "broken" | "Broken" |
* | * | "No data" |
*
* @param {Content_Radar_StatusInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_radar_status = /** @type {((inputs: Content_Radar_StatusInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_StatusInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_radar_status(inputs)
	if (locale === "de") return de_content_radar_status(inputs)
	if (locale === "fr") return fr_content_radar_status(inputs)
	if (locale === "it") return it_content_radar_status(inputs)
	if (locale === "nl") return nl_content_radar_status(inputs)
	if (locale === "pl") return pl_content_radar_status(inputs)
	if (locale === "pt") return pt_content_radar_status(inputs)
	if (locale === "ru") return ru_content_radar_status(inputs)
	if (locale === "sv") return sv_content_radar_status(inputs)
	if (locale === "tr") return tr_content_radar_status(inputs)
	if (locale === "zh") return zh_content_radar_status(inputs)
	if (locale === "ja") return ja_content_radar_status(inputs)
	return en_content_radar_status(inputs)
});
