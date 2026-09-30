/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Quality_HintInputs */

const en_upload_quality_hint = /** @type {(inputs: Upload_Quality_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Complete listings rank higher in Explore and get more downloads.`)
};

const es_upload_quality_hint = /** @type {(inputs: Upload_Quality_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Las fichas completas salen más arriba en Explorar y reciben más descargas.`)
};

const de_upload_quality_hint = /** @type {(inputs: Upload_Quality_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vollständige Einträge ranken in Entdecken höher und werden öfter heruntergeladen.`)
};

const fr_upload_quality_hint = /** @type {(inputs: Upload_Quality_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les fiches complètes remontent dans Explorer et sont plus téléchargées.`)
};

const it_upload_quality_hint = /** @type {(inputs: Upload_Quality_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le schede complete salgono in Esplora e ricevono più download.`)
};

const nl_upload_quality_hint = /** @type {(inputs: Upload_Quality_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Complete vermeldingen scoren hoger in Verkennen en worden vaker gedownload.`)
};

const pl_upload_quality_hint = /** @type {(inputs: Upload_Quality_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kompletne wpisy są wyżej w Odkrywaniu i częściej pobierane.`)
};

const pt_upload_quality_hint = /** @type {(inputs: Upload_Quality_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fichas completas sobem em Explorar e recebem mais downloads.`)
};

const ru_upload_quality_hint = /** @type {(inputs: Upload_Quality_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Полные карточки выше в Обзоре и чаще скачиваются.`)
};

const sv_upload_quality_hint = /** @type {(inputs: Upload_Quality_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kompletta sidor rankas högre i Utforska och laddas ner oftare.`)
};

const tr_upload_quality_hint = /** @type {(inputs: Upload_Quality_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eksiksiz sayfalar Keşfet’te daha üstte çıkar ve daha çok indirilir.`)
};

const zh_upload_quality_hint = /** @type {(inputs: Upload_Quality_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`完整的页面在探索中排名更高，下载也更多。`)
};

const ja_upload_quality_hint = /** @type {(inputs: Upload_Quality_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`充実したページは探索で上位に表示され、ダウンロードも増えます。`)
};

/**
* | output |
* | --- |
* | "Complete listings rank higher in Explore and get more downloads." |
*
* @param {Upload_Quality_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_quality_hint = /** @type {((inputs?: Upload_Quality_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Quality_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_quality_hint(inputs)
	if (locale === "de") return de_upload_quality_hint(inputs)
	if (locale === "fr") return fr_upload_quality_hint(inputs)
	if (locale === "it") return it_upload_quality_hint(inputs)
	if (locale === "nl") return nl_upload_quality_hint(inputs)
	if (locale === "pl") return pl_upload_quality_hint(inputs)
	if (locale === "pt") return pt_upload_quality_hint(inputs)
	if (locale === "ru") return ru_upload_quality_hint(inputs)
	if (locale === "sv") return sv_upload_quality_hint(inputs)
	if (locale === "tr") return tr_upload_quality_hint(inputs)
	if (locale === "zh") return zh_upload_quality_hint(inputs)
	if (locale === "ja") return ja_upload_quality_hint(inputs)
	return en_upload_quality_hint(inputs)
});
