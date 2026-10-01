/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Dev_Legacy_Retired_WriteInputs */

const en_content_dev_legacy_retired_write = /** @type {(inputs: Content_Dev_Legacy_Retired_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Write routes that were retired (uploads, edits, comments, votes) also answer 410 with the same envelope: status false, error GONE. Use the v2 API with a token instead.`)
};

const es_content_dev_legacy_retired_write = /** @type {(inputs: Content_Dev_Legacy_Retired_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Las rutas de escritura retiradas (subidas, ediciones, comentarios, votos) también responden 410 con el mismo sobre: status false, error GONE. Usa la API v2 con un token.`)
};

const de_content_dev_legacy_retired_write = /** @type {(inputs: Content_Dev_Legacy_Retired_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eingestellte Schreibrouten (Uploads, Änderungen, Kommentare, Bewertungen) antworten ebenfalls mit 410 und demselben Envelope: status false, error GONE. Nutze stattdessen die v2-API mit Token.`)
};

const fr_content_dev_legacy_retired_write = /** @type {(inputs: Content_Dev_Legacy_Retired_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les routes d’écriture retirées (envois, modifications, commentaires, votes) répondent aussi 410 avec la même enveloppe : status false, error GONE. Utilisez l’API v2 avec un jeton.`)
};

const it_content_dev_legacy_retired_write = /** @type {(inputs: Content_Dev_Legacy_Retired_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anche le rotte di scrittura ritirate (caricamenti, modifiche, commenti, voti) rispondono 410 con lo stesso envelope: status false, error GONE. Usa l’API v2 con un token.`)
};

const nl_content_dev_legacy_retired_write = /** @type {(inputs: Content_Dev_Legacy_Retired_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingetrokken schrijfroutes (uploads, bewerkingen, reacties, stemmen) antwoorden ook met 410 en dezelfde envelope: status false, error GONE. Gebruik de v2-API met een token.`)
};

const pl_content_dev_legacy_retired_write = /** @type {(inputs: Content_Dev_Legacy_Retired_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wycofane trasy zapisu (przesyłanie, edycje, komentarze, głosy) także zwracają 410 z tą samą kopertą: status false, error GONE. Używaj API v2 z tokenem.`)
};

const pt_content_dev_legacy_retired_write = /** @type {(inputs: Content_Dev_Legacy_Retired_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`As rotas de escrita desativadas (envios, edições, comentários, votos) também respondem 410 com o mesmo envelope: status false, error GONE. Use a API v2 com um token.`)
};

const ru_content_dev_legacy_retired_write = /** @type {(inputs: Content_Dev_Legacy_Retired_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выведенные из работы маршруты записи (загрузки, правки, комментарии, голоса) тоже отвечают 410 с тем же конвертом: status false, error GONE. Используйте API v2 с токеном.`)
};

const sv_content_dev_legacy_retired_write = /** @type {(inputs: Content_Dev_Legacy_Retired_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avvecklade skrivrutter (uppladdningar, ändringar, kommentarer, röster) svarar också 410 med samma kuvert: status false, error GONE. Använd v2-API:et med en token.`)
};

const tr_content_dev_legacy_retired_write = /** @type {(inputs: Content_Dev_Legacy_Retired_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kaldırılan yazma rotaları (yüklemeler, düzenlemeler, yorumlar, oylar) da aynı zarfla 410 döner: status false, error GONE. Bunun yerine belirteçle v2 API’sini kullanın.`)
};

const zh_content_dev_legacy_retired_write = /** @type {(inputs: Content_Dev_Legacy_Retired_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已停用的写入路由（上传、编辑、评论、投票）同样返回 410 和相同的响应结构：status false、error GONE。请改用带令牌的 v2 API。`)
};

const ja_content_dev_legacy_retired_write = /** @type {(inputs: Content_Dev_Legacy_Retired_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`廃止された書き込みルート（アップロード、編集、コメント、投票）も同じエンベロープで410を返します：status false、error GONE。トークン付きのv2 APIを使用してください。`)
};

/**
* | output |
* | --- |
* | "Write routes that were retired (uploads, edits, comments, votes) also answer 410 with the same envelope: status false, error GONE. Use the v2 API with a toke..." |
*
* @param {Content_Dev_Legacy_Retired_WriteInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_dev_legacy_retired_write = /** @type {((inputs?: Content_Dev_Legacy_Retired_WriteInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Dev_Legacy_Retired_WriteInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_dev_legacy_retired_write(inputs)
	if (locale === "de") return de_content_dev_legacy_retired_write(inputs)
	if (locale === "fr") return fr_content_dev_legacy_retired_write(inputs)
	if (locale === "it") return it_content_dev_legacy_retired_write(inputs)
	if (locale === "nl") return nl_content_dev_legacy_retired_write(inputs)
	if (locale === "pl") return pl_content_dev_legacy_retired_write(inputs)
	if (locale === "pt") return pt_content_dev_legacy_retired_write(inputs)
	if (locale === "ru") return ru_content_dev_legacy_retired_write(inputs)
	if (locale === "sv") return sv_content_dev_legacy_retired_write(inputs)
	if (locale === "tr") return tr_content_dev_legacy_retired_write(inputs)
	if (locale === "zh") return zh_content_dev_legacy_retired_write(inputs)
	if (locale === "ja") return ja_content_dev_legacy_retired_write(inputs)
	return en_content_dev_legacy_retired_write(inputs)
});
