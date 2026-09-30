/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Dev_Endpoints_TextInputs */

const en_content_dev_endpoints_text = /** @type {(inputs: Content_Dev_Endpoints_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anonymous, cacheable and CORS-enabled. The reference documents parameters, responses and errors for each one.`)
};

const es_content_dev_endpoints_text = /** @type {(inputs: Content_Dev_Endpoints_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anónimos, cacheables y con CORS. La referencia documenta parámetros, respuestas y errores de cada uno.`)
};

const de_content_dev_endpoints_text = /** @type {(inputs: Content_Dev_Endpoints_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anonym, cachebar und mit CORS. Die Referenz dokumentiert Parameter, Antworten und Fehler jedes Endpunkts.`)
};

const fr_content_dev_endpoints_text = /** @type {(inputs: Content_Dev_Endpoints_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anonymes, mis en cache et compatibles CORS. La référence documente paramètres, réponses et erreurs pour chacun.`)
};

const it_content_dev_endpoints_text = /** @type {(inputs: Content_Dev_Endpoints_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anonimi, memorizzabili in cache e con CORS. Il riferimento documenta parametri, risposte ed errori di ciascuno.`)
};

const nl_content_dev_endpoints_text = /** @type {(inputs: Content_Dev_Endpoints_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anoniem, cachebaar en met CORS. De referentie beschrijft parameters, antwoorden en fouten van elk endpoint.`)
};

const pl_content_dev_endpoints_text = /** @type {(inputs: Content_Dev_Endpoints_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anonimowe, z pamięcią podręczną i CORS. Dokumentacja opisuje parametry, odpowiedzi i błędy każdego z nich.`)
};

const pt_content_dev_endpoints_text = /** @type {(inputs: Content_Dev_Endpoints_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anônimos, cacheáveis e com CORS. A referência documenta parâmetros, respostas e erros de cada um.`)
};

const ru_content_dev_endpoints_text = /** @type {(inputs: Content_Dev_Endpoints_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Анонимные, кешируемые, с CORS. Справочник описывает параметры, ответы и ошибки каждого.`)
};

const sv_content_dev_endpoints_text = /** @type {(inputs: Content_Dev_Endpoints_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anonyma, cachebara och med CORS. Referensen dokumenterar parametrar, svar och fel för varje slutpunkt.`)
};

const tr_content_dev_endpoints_text = /** @type {(inputs: Content_Dev_Endpoints_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anonim, önbelleğe alınabilir ve CORS destekli. Başvuru her birinin parametrelerini, yanıtlarını ve hatalarını belgeler.`)
};

const zh_content_dev_endpoints_text = /** @type {(inputs: Content_Dev_Endpoints_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`匿名、可缓存并支持 CORS。参考文档列出了每个接口的参数、响应和错误。`)
};

const ja_content_dev_endpoints_text = /** @type {(inputs: Content_Dev_Endpoints_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`匿名で利用でき、キャッシュ可能で CORS に対応しています。各エンドポイントのパラメーター、レスポンス、エラーはリファレンスを参照してください。`)
};

/**
* | output |
* | --- |
* | "Anonymous, cacheable and CORS-enabled. The reference documents parameters, responses and errors for each one." |
*
* @param {Content_Dev_Endpoints_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_dev_endpoints_text = /** @type {((inputs?: Content_Dev_Endpoints_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Dev_Endpoints_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_dev_endpoints_text(inputs)
	if (locale === "de") return de_content_dev_endpoints_text(inputs)
	if (locale === "fr") return fr_content_dev_endpoints_text(inputs)
	if (locale === "it") return it_content_dev_endpoints_text(inputs)
	if (locale === "nl") return nl_content_dev_endpoints_text(inputs)
	if (locale === "pl") return pl_content_dev_endpoints_text(inputs)
	if (locale === "pt") return pt_content_dev_endpoints_text(inputs)
	if (locale === "ru") return ru_content_dev_endpoints_text(inputs)
	if (locale === "sv") return sv_content_dev_endpoints_text(inputs)
	if (locale === "tr") return tr_content_dev_endpoints_text(inputs)
	if (locale === "zh") return zh_content_dev_endpoints_text(inputs)
	if (locale === "ja") return ja_content_dev_endpoints_text(inputs)
	return en_content_dev_endpoints_text(inputs)
});
