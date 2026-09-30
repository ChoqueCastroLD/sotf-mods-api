/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Dev_Limits_TextInputs */

const en_content_dev_limits_text = /** @type {(inputs: Content_Dev_Limits_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Above a limit the API answers 429 with a Retry-After header. Cache responses and honour ETags; you will rarely come close.`)
};

const es_content_dev_limits_text = /** @type {(inputs: Content_Dev_Limits_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Por encima de un límite la API responde 429 con la cabecera Retry-After. Cachea las respuestas y respeta los ETag; rara vez te acercarás.`)
};

const de_content_dev_limits_text = /** @type {(inputs: Content_Dev_Limits_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Über einem Limit antwortet die API mit 429 und einem Retry-After-Header. Cache Antworten und beachte ETags, dann kommst du kaum in die Nähe.`)
};

const fr_content_dev_limits_text = /** @type {(inputs: Content_Dev_Limits_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Au-delà d’une limite, l’API répond 429 avec un en-tête Retry-After. Mettez les réponses en cache et respectez les ETag : vous en approcherez rarement.`)
};

const it_content_dev_limits_text = /** @type {(inputs: Content_Dev_Limits_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oltre un limite l’API risponde 429 con l’intestazione Retry-After. Metti in cache le risposte e rispetta gli ETag: ci andrai raramente vicino.`)
};

const nl_content_dev_limits_text = /** @type {(inputs: Content_Dev_Limits_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Boven een limiet antwoordt de API met 429 en een Retry-After-header. Cache antwoorden en respecteer ETags; dan kom je er zelden in de buurt.`)
};

const pl_content_dev_limits_text = /** @type {(inputs: Content_Dev_Limits_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Po przekroczeniu limitu API odpowiada kodem 429 z nagłówkiem Retry-After. Buforuj odpowiedzi i respektuj ETagi, a rzadko się do niego zbliżysz.`)
};

const pt_content_dev_limits_text = /** @type {(inputs: Content_Dev_Limits_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Acima de um limite, a API responde 429 com o cabeçalho Retry-After. Faça cache das respostas e respeite os ETags; você raramente vai chegar perto.`)
};

const ru_content_dev_limits_text = /** @type {(inputs: Content_Dev_Limits_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`При превышении лимита API отвечает 429 с заголовком Retry-After. Кешируйте ответы и учитывайте ETag — тогда вы вряд ли к нему приблизитесь.`)
};

const sv_content_dev_limits_text = /** @type {(inputs: Content_Dev_Limits_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Över en gräns svarar API:t 429 med huvudet Retry-After. Cacha svar och respektera ETags, så kommer du sällan i närheten.`)
};

const tr_content_dev_limits_text = /** @type {(inputs: Content_Dev_Limits_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir sınırın üzerinde API, Retry-After başlığıyla 429 yanıtı verir. Yanıtları önbelleğe al ve ETag’lere uy; nadiren yaklaşırsın.`)
};

const zh_content_dev_limits_text = /** @type {(inputs: Content_Dev_Limits_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`超过限制时，API 返回 429 并附带 Retry-After 头。缓存响应并遵守 ETag，你几乎不会触及限制。`)
};

const ja_content_dev_limits_text = /** @type {(inputs: Content_Dev_Limits_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上限を超えると API は Retry-After ヘッダー付きで 429 を返します。レスポンスをキャッシュし ETag を尊重すれば、上限に近づくことはほとんどありません。`)
};

/**
* | output |
* | --- |
* | "Above a limit the API answers 429 with a Retry-After header. Cache responses and honour ETags; you will rarely come close." |
*
* @param {Content_Dev_Limits_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_dev_limits_text = /** @type {((inputs?: Content_Dev_Limits_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Dev_Limits_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_dev_limits_text(inputs)
	if (locale === "de") return de_content_dev_limits_text(inputs)
	if (locale === "fr") return fr_content_dev_limits_text(inputs)
	if (locale === "it") return it_content_dev_limits_text(inputs)
	if (locale === "nl") return nl_content_dev_limits_text(inputs)
	if (locale === "pl") return pl_content_dev_limits_text(inputs)
	if (locale === "pt") return pt_content_dev_limits_text(inputs)
	if (locale === "ru") return ru_content_dev_limits_text(inputs)
	if (locale === "sv") return sv_content_dev_limits_text(inputs)
	if (locale === "tr") return tr_content_dev_limits_text(inputs)
	if (locale === "zh") return zh_content_dev_limits_text(inputs)
	if (locale === "ja") return ja_content_dev_limits_text(inputs)
	return en_content_dev_limits_text(inputs)
});
