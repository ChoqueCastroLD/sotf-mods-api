/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ date: NonNullable<unknown> }} Content_Dev_Legacy_Deprecated_TextInputs */

const en_content_dev_legacy_deprecated_text = /** @type {(inputs: Content_Dev_Legacy_Deprecated_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`These routes keep answering until ${i?.date}, then they will be retired. Their responses carry these headers:`)
};

const es_content_dev_legacy_deprecated_text = /** @type {(inputs: Content_Dev_Legacy_Deprecated_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Estas rutas siguen respondiendo hasta el ${i?.date}; después se retirarán. Sus respuestas llevan estas cabeceras:`)
};

const de_content_dev_legacy_deprecated_text = /** @type {(inputs: Content_Dev_Legacy_Deprecated_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Diese Routen antworten bis zum ${i?.date}, danach werden sie abgeschaltet. Ihre Antworten tragen diese Header:`)
};

const fr_content_dev_legacy_deprecated_text = /** @type {(inputs: Content_Dev_Legacy_Deprecated_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ces routes répondent jusqu’au ${i?.date}, puis elles seront retirées. Leurs réponses portent ces en-têtes :`)
};

const it_content_dev_legacy_deprecated_text = /** @type {(inputs: Content_Dev_Legacy_Deprecated_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Queste rotte rispondono fino al ${i?.date}, poi verranno ritirate. Le loro risposte includono queste intestazioni:`)
};

const nl_content_dev_legacy_deprecated_text = /** @type {(inputs: Content_Dev_Legacy_Deprecated_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Deze routes blijven antwoorden tot ${i?.date}; daarna worden ze uitgeschakeld. Hun antwoorden bevatten deze headers:`)
};

const pl_content_dev_legacy_deprecated_text = /** @type {(inputs: Content_Dev_Legacy_Deprecated_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Te trasy odpowiadają do ${i?.date}, potem zostaną wyłączone. Ich odpowiedzi zawierają te nagłówki:`)
};

const pt_content_dev_legacy_deprecated_text = /** @type {(inputs: Content_Dev_Legacy_Deprecated_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Estas rotas respondem até ${i?.date}; depois, serão desativadas. As respostas trazem estes cabeçalhos:`)
};

const ru_content_dev_legacy_deprecated_text = /** @type {(inputs: Content_Dev_Legacy_Deprecated_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Эти маршруты отвечают до ${i?.date}, затем будут отключены. Их ответы содержат такие заголовки:`)
};

const sv_content_dev_legacy_deprecated_text = /** @type {(inputs: Content_Dev_Legacy_Deprecated_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`De här rutterna svarar till ${i?.date}, sedan stängs de. Deras svar har de här huvudena:`)
};

const tr_content_dev_legacy_deprecated_text = /** @type {(inputs: Content_Dev_Legacy_Deprecated_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bu rotalar ${i?.date} tarihine kadar yanıt verir, sonra kapatılır. Yanıtlarında şu başlıklar bulunur:`)
};

const zh_content_dev_legacy_deprecated_text = /** @type {(inputs: Content_Dev_Legacy_Deprecated_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`这些路由将响应至 ${i?.date}，之后停用。其响应包含以下头：`)
};

const ja_content_dev_legacy_deprecated_text = /** @type {(inputs: Content_Dev_Legacy_Deprecated_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`これらのルートは ${i?.date} まで応答し、その後廃止されます。レスポンスには次のヘッダーが付きます：`)
};

/**
* | output |
* | --- |
* | "These routes keep answering until {date}, then they will be retired. Their responses carry these headers:" |
*
* @param {Content_Dev_Legacy_Deprecated_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_dev_legacy_deprecated_text = /** @type {((inputs: Content_Dev_Legacy_Deprecated_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Dev_Legacy_Deprecated_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_dev_legacy_deprecated_text(inputs)
	if (locale === "de") return de_content_dev_legacy_deprecated_text(inputs)
	if (locale === "fr") return fr_content_dev_legacy_deprecated_text(inputs)
	if (locale === "it") return it_content_dev_legacy_deprecated_text(inputs)
	if (locale === "nl") return nl_content_dev_legacy_deprecated_text(inputs)
	if (locale === "pl") return pl_content_dev_legacy_deprecated_text(inputs)
	if (locale === "pt") return pt_content_dev_legacy_deprecated_text(inputs)
	if (locale === "ru") return ru_content_dev_legacy_deprecated_text(inputs)
	if (locale === "sv") return sv_content_dev_legacy_deprecated_text(inputs)
	if (locale === "tr") return tr_content_dev_legacy_deprecated_text(inputs)
	if (locale === "zh") return zh_content_dev_legacy_deprecated_text(inputs)
	if (locale === "ja") return ja_content_dev_legacy_deprecated_text(inputs)
	return en_content_dev_legacy_deprecated_text(inputs)
});
