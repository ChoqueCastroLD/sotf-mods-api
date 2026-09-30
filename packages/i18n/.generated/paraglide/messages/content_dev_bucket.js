/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ bucket: NonNullable<unknown> }} Content_Dev_BucketInputs */

const en_content_dev_bucket = /** @type {(inputs: Content_Dev_BucketInputs) => LocalizedString} */ (i) => {
	if (i?.bucket === "anonymousRead") return /** @type {LocalizedString} */ (`API v2 reads`);
	if (i?.bucket === "legacyRead") return /** @type {LocalizedString} */ (`Legacy API reads`);
	if (i?.bucket === "downloads") return /** @type {LocalizedString} */ (`Downloads`);
	if (i?.bucket === "kelvinseek") return /** @type {LocalizedString} */ (`KelvinSeek`);
	return /** @type {LocalizedString} */ (`${i?.bucket}`)
	
};

const es_content_dev_bucket = /** @type {(inputs: Content_Dev_BucketInputs) => LocalizedString} */ (i) => {
	if (i?.bucket === "anonymousRead") return /** @type {LocalizedString} */ (`Lecturas de la API v2`);
	if (i?.bucket === "legacyRead") return /** @type {LocalizedString} */ (`Lecturas de la API legacy`);
	if (i?.bucket === "downloads") return /** @type {LocalizedString} */ (`Descargas`);
	if (i?.bucket === "kelvinseek") return /** @type {LocalizedString} */ (`KelvinSeek`);
	return /** @type {LocalizedString} */ (`${i?.bucket}`)
	
};

const de_content_dev_bucket = /** @type {(inputs: Content_Dev_BucketInputs) => LocalizedString} */ (i) => {
	if (i?.bucket === "anonymousRead") return /** @type {LocalizedString} */ (`Lesezugriffe API v2`);
	if (i?.bucket === "legacyRead") return /** @type {LocalizedString} */ (`Lesezugriffe Legacy-API`);
	if (i?.bucket === "downloads") return /** @type {LocalizedString} */ (`Downloads`);
	if (i?.bucket === "kelvinseek") return /** @type {LocalizedString} */ (`KelvinSeek`);
	return /** @type {LocalizedString} */ (`${i?.bucket}`)
	
};

const fr_content_dev_bucket = /** @type {(inputs: Content_Dev_BucketInputs) => LocalizedString} */ (i) => {
	if (i?.bucket === "anonymousRead") return /** @type {LocalizedString} */ (`Lectures API v2`);
	if (i?.bucket === "legacyRead") return /** @type {LocalizedString} */ (`Lectures API historique`);
	if (i?.bucket === "downloads") return /** @type {LocalizedString} */ (`Téléchargements`);
	if (i?.bucket === "kelvinseek") return /** @type {LocalizedString} */ (`KelvinSeek`);
	return /** @type {LocalizedString} */ (`${i?.bucket}`)
	
};

const it_content_dev_bucket = /** @type {(inputs: Content_Dev_BucketInputs) => LocalizedString} */ (i) => {
	if (i?.bucket === "anonymousRead") return /** @type {LocalizedString} */ (`Letture API v2`);
	if (i?.bucket === "legacyRead") return /** @type {LocalizedString} */ (`Letture API legacy`);
	if (i?.bucket === "downloads") return /** @type {LocalizedString} */ (`Download`);
	if (i?.bucket === "kelvinseek") return /** @type {LocalizedString} */ (`KelvinSeek`);
	return /** @type {LocalizedString} */ (`${i?.bucket}`)
	
};

const nl_content_dev_bucket = /** @type {(inputs: Content_Dev_BucketInputs) => LocalizedString} */ (i) => {
	if (i?.bucket === "anonymousRead") return /** @type {LocalizedString} */ (`Leesverzoeken API v2`);
	if (i?.bucket === "legacyRead") return /** @type {LocalizedString} */ (`Leesverzoeken legacy-API`);
	if (i?.bucket === "downloads") return /** @type {LocalizedString} */ (`Downloads`);
	if (i?.bucket === "kelvinseek") return /** @type {LocalizedString} */ (`KelvinSeek`);
	return /** @type {LocalizedString} */ (`${i?.bucket}`)
	
};

const pl_content_dev_bucket = /** @type {(inputs: Content_Dev_BucketInputs) => LocalizedString} */ (i) => {
	if (i?.bucket === "anonymousRead") return /** @type {LocalizedString} */ (`Odczyty API v2`);
	if (i?.bucket === "legacyRead") return /** @type {LocalizedString} */ (`Odczyty starszego API`);
	if (i?.bucket === "downloads") return /** @type {LocalizedString} */ (`Pobrania`);
	if (i?.bucket === "kelvinseek") return /** @type {LocalizedString} */ (`KelvinSeek`);
	return /** @type {LocalizedString} */ (`${i?.bucket}`)
	
};

const pt_content_dev_bucket = /** @type {(inputs: Content_Dev_BucketInputs) => LocalizedString} */ (i) => {
	if (i?.bucket === "anonymousRead") return /** @type {LocalizedString} */ (`Leituras da API v2`);
	if (i?.bucket === "legacyRead") return /** @type {LocalizedString} */ (`Leituras da API legada`);
	if (i?.bucket === "downloads") return /** @type {LocalizedString} */ (`Downloads`);
	if (i?.bucket === "kelvinseek") return /** @type {LocalizedString} */ (`KelvinSeek`);
	return /** @type {LocalizedString} */ (`${i?.bucket}`)
	
};

const ru_content_dev_bucket = /** @type {(inputs: Content_Dev_BucketInputs) => LocalizedString} */ (i) => {
	if (i?.bucket === "anonymousRead") return /** @type {LocalizedString} */ (`Чтение API v2`);
	if (i?.bucket === "legacyRead") return /** @type {LocalizedString} */ (`Чтение старого API`);
	if (i?.bucket === "downloads") return /** @type {LocalizedString} */ (`Скачивания`);
	if (i?.bucket === "kelvinseek") return /** @type {LocalizedString} */ (`KelvinSeek`);
	return /** @type {LocalizedString} */ (`${i?.bucket}`)
	
};

const sv_content_dev_bucket = /** @type {(inputs: Content_Dev_BucketInputs) => LocalizedString} */ (i) => {
	if (i?.bucket === "anonymousRead") return /** @type {LocalizedString} */ (`Läsningar i API v2`);
	if (i?.bucket === "legacyRead") return /** @type {LocalizedString} */ (`Läsningar i äldre API`);
	if (i?.bucket === "downloads") return /** @type {LocalizedString} */ (`Nedladdningar`);
	if (i?.bucket === "kelvinseek") return /** @type {LocalizedString} */ (`KelvinSeek`);
	return /** @type {LocalizedString} */ (`${i?.bucket}`)
	
};

const tr_content_dev_bucket = /** @type {(inputs: Content_Dev_BucketInputs) => LocalizedString} */ (i) => {
	if (i?.bucket === "anonymousRead") return /** @type {LocalizedString} */ (`API v2 okumaları`);
	if (i?.bucket === "legacyRead") return /** @type {LocalizedString} */ (`Eski API okumaları`);
	if (i?.bucket === "downloads") return /** @type {LocalizedString} */ (`İndirmeler`);
	if (i?.bucket === "kelvinseek") return /** @type {LocalizedString} */ (`KelvinSeek`);
	return /** @type {LocalizedString} */ (`${i?.bucket}`)
	
};

const zh_content_dev_bucket = /** @type {(inputs: Content_Dev_BucketInputs) => LocalizedString} */ (i) => {
	if (i?.bucket === "anonymousRead") return /** @type {LocalizedString} */ (`API v2 读取`);
	if (i?.bucket === "legacyRead") return /** @type {LocalizedString} */ (`旧版 API 读取`);
	if (i?.bucket === "downloads") return /** @type {LocalizedString} */ (`下载`);
	if (i?.bucket === "kelvinseek") return /** @type {LocalizedString} */ (`KelvinSeek`);
	return /** @type {LocalizedString} */ (`${i?.bucket}`)
	
};

const ja_content_dev_bucket = /** @type {(inputs: Content_Dev_BucketInputs) => LocalizedString} */ (i) => {
	if (i?.bucket === "anonymousRead") return /** @type {LocalizedString} */ (`API v2 の読み取り`);
	if (i?.bucket === "legacyRead") return /** @type {LocalizedString} */ (`旧 API の読み取り`);
	if (i?.bucket === "downloads") return /** @type {LocalizedString} */ (`ダウンロード`);
	if (i?.bucket === "kelvinseek") return /** @type {LocalizedString} */ (`KelvinSeek`);
	return /** @type {LocalizedString} */ (`${i?.bucket}`)
	
};

/**
* | bucket | output |
* | --- | --- |
* | "anonymousRead" | "API v2 reads" |
* | "legacyRead" | "Legacy API reads" |
* | "downloads" | "Downloads" |
* | "kelvinseek" | "KelvinSeek" |
* | * | "{bucket}" |
*
* @param {Content_Dev_BucketInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_dev_bucket = /** @type {((inputs: Content_Dev_BucketInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Dev_BucketInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_dev_bucket(inputs)
	if (locale === "de") return de_content_dev_bucket(inputs)
	if (locale === "fr") return fr_content_dev_bucket(inputs)
	if (locale === "it") return it_content_dev_bucket(inputs)
	if (locale === "nl") return nl_content_dev_bucket(inputs)
	if (locale === "pl") return pl_content_dev_bucket(inputs)
	if (locale === "pt") return pt_content_dev_bucket(inputs)
	if (locale === "ru") return ru_content_dev_bucket(inputs)
	if (locale === "sv") return sv_content_dev_bucket(inputs)
	if (locale === "tr") return tr_content_dev_bucket(inputs)
	if (locale === "zh") return zh_content_dev_bucket(inputs)
	if (locale === "ja") return ja_content_dev_bucket(inputs)
	return en_content_dev_bucket(inputs)
});
