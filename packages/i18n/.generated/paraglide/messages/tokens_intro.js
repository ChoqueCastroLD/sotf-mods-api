/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Tokens_IntroInputs */

const en_tokens_intro = /** @type {(inputs: Tokens_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Send a key in the Authorization header when you call the API. A key acts as you, never as staff, and only within the permissions you choose. You can revoke it at any time.`)
};

const es_tokens_intro = /** @type {(inputs: Tokens_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Envía una clave en la cabecera Authorization al llamar a la API. Una clave actúa como tú, nunca como staff, y solo con los permisos que elijas. Puedes revocarla cuando quieras.`)
};

const de_tokens_intro = /** @type {(inputs: Tokens_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sende einen Schlüssel im Authorization-Header, wenn du die API aufrufst. Ein Schlüssel handelt als du, nie als Team, und nur mit den Rechten, die du wählst. Du kannst ihn jederzeit widerrufen.`)
};

const fr_tokens_intro = /** @type {(inputs: Tokens_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Envoyez une clé dans l’en-tête Authorization quand vous appelez l’API. Une clé agit en votre nom, jamais en tant que modération, et seulement avec les permissions choisies. Vous pouvez la révoquer à tout moment.`)
};

const it_tokens_intro = /** @type {(inputs: Tokens_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Invia una chiave nell’intestazione Authorization quando chiami l’API. Una chiave agisce come te, mai come staff, e solo con i permessi che scegli. Puoi revocarla in qualsiasi momento.`)
};

const nl_tokens_intro = /** @type {(inputs: Tokens_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stuur een sleutel mee in de Authorization-header als je de API aanroept. Een sleutel handelt als jou, nooit als moderator, en alleen met de rechten die je kiest. Je kunt hem altijd intrekken.`)
};

const pl_tokens_intro = /** @type {(inputs: Tokens_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wysyłaj klucz w nagłówku Authorization, gdy wywołujesz API. Klucz działa jako ty, nigdy jako moderacja, i tylko z wybranymi uprawnieniami. Możesz go w każdej chwili unieważnić.`)
};

const pt_tokens_intro = /** @type {(inputs: Tokens_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Envie uma chave no cabeçalho Authorization ao chamar a API. Uma chave age como você, nunca como equipe, e só com as permissões que você escolher. Você pode revogá-la a qualquer momento.`)
};

const ru_tokens_intro = /** @type {(inputs: Tokens_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Передавайте ключ в заголовке Authorization при вызове API. Ключ действует от вашего имени, никогда как модератор, и только с выбранными правами. Его можно отозвать в любой момент.`)
};

const sv_tokens_intro = /** @type {(inputs: Tokens_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skicka en nyckel i Authorization-huvudet när du anropar API:et. En nyckel agerar som du, aldrig som personal, och bara med de behörigheter du väljer. Du kan återkalla den när som helst.`)
};

const tr_tokens_intro = /** @type {(inputs: Tokens_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API'yi çağırırken anahtarı Authorization başlığında gönder. Anahtar senin adına çalışır, asla yetkili olarak değil, ve yalnızca seçtiğin izinlerle. İstediğin zaman iptal edebilirsin.`)
};

const zh_tokens_intro = /** @type {(inputs: Tokens_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`调用 API 时在 Authorization 请求头中发送密钥。密钥以你的身份操作，绝不具备管理员权限，并且只拥有你选择的权限。你可以随时撤销。`)
};

const ja_tokens_intro = /** @type {(inputs: Tokens_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API を呼び出すときは Authorization ヘッダーでキーを送ってください。キーはあなたとして動作し、スタッフ権限は持たず、選んだ権限の範囲でのみ使えます。いつでも取り消せます。`)
};

/**
* | output |
* | --- |
* | "Send a key in the Authorization header when you call the API. A key acts as you, never as staff, and only within the permissions you choose. You can revoke i..." |
*
* @param {Tokens_IntroInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const tokens_intro = /** @type {((inputs?: Tokens_IntroInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tokens_IntroInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_tokens_intro(inputs)
	if (locale === "de") return de_tokens_intro(inputs)
	if (locale === "fr") return fr_tokens_intro(inputs)
	if (locale === "it") return it_tokens_intro(inputs)
	if (locale === "nl") return nl_tokens_intro(inputs)
	if (locale === "pl") return pl_tokens_intro(inputs)
	if (locale === "pt") return pt_tokens_intro(inputs)
	if (locale === "ru") return ru_tokens_intro(inputs)
	if (locale === "sv") return sv_tokens_intro(inputs)
	if (locale === "tr") return tr_tokens_intro(inputs)
	if (locale === "zh") return zh_tokens_intro(inputs)
	if (locale === "ja") return ja_tokens_intro(inputs)
	return en_tokens_intro(inputs)
});
