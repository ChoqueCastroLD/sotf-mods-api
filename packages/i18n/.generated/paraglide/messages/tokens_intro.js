/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Tokens_IntroInputs */

const en_tokens_intro = /** @type {(inputs: Tokens_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Send a token in the Authorization header when you call the public API. A token acts as you, never as staff, and only within the permissions you choose. You can revoke it at any time.`)
};

const es_tokens_intro = /** @type {(inputs: Tokens_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Envía un token en la cabecera Authorization al llamar a la API pública. Un token actúa como tú, nunca como personal del sitio, y solo con los permisos que elijas. Puedes revocarlo cuando quieras.`)
};

const de_tokens_intro = /** @type {(inputs: Tokens_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sende einen Token im Authorization-Header, wenn du die öffentliche API aufrufst. Ein Token handelt als du, nie als Team-Mitglied, und nur mit den gewählten Berechtigungen. Du kannst ihn jederzeit widerrufen.`)
};

const fr_tokens_intro = /** @type {(inputs: Tokens_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Envoyez un jeton dans l’en-tête Authorization pour appeler l’API publique. Un jeton agit comme vous, jamais comme l’équipe, et uniquement avec les autorisations choisies. Vous pouvez le révoquer à tout moment.`)
};

const it_tokens_intro = /** @type {(inputs: Tokens_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Invia un token nell’intestazione Authorization quando chiami l’API pubblica. Un token agisce come te, mai come staff, e solo con i permessi scelti. Puoi revocarlo in qualsiasi momento.`)
};

const nl_tokens_intro = /** @type {(inputs: Tokens_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stuur een token mee in de Authorization-header wanneer je de openbare API aanroept. Een token handelt als jij, nooit als staflid, en alleen binnen de rechten die je kiest. Je kunt hem altijd intrekken.`)
};

const pl_tokens_intro = /** @type {(inputs: Tokens_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyślij token w nagłówku Authorization podczas wywołań publicznego API. Token działa jako Ty, nigdy jako zespół, i tylko w ramach wybranych uprawnień. Możesz go w każdej chwili unieważnić.`)
};

const pt_tokens_intro = /** @type {(inputs: Tokens_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Envie um token no cabeçalho Authorization ao chamar a API pública. Um token age como você, nunca como equipe, e só com as permissões escolhidas. Você pode revogá-lo quando quiser.`)
};

const ru_tokens_intro = /** @type {(inputs: Tokens_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Передавайте токен в заголовке Authorization при вызовах публичного API. Токен действует от вашего имени, никогда как сотрудник сайта, и только в рамках выбранных прав. Его можно отозвать в любой момент.`)
};

const sv_tokens_intro = /** @type {(inputs: Tokens_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skicka en token i Authorization-huvudet när du anropar det publika API:et. En token agerar som du, aldrig som personal, och bara med de behörigheter du väljer. Du kan återkalla den när som helst.`)
};

const tr_tokens_intro = /** @type {(inputs: Tokens_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Herkese açık API’yi çağırırken belirteci Authorization başlığında gönder. Belirteç senin adına, asla ekip üyesi olarak değil ve yalnızca seçtiğin izinlerle çalışır. İstediğin zaman iptal edebilirsin.`)
};

const zh_tokens_intro = /** @type {(inputs: Tokens_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`调用公开 API 时，在 Authorization 请求头中发送令牌。令牌以你的身份行事，绝不具备管理员权限，且仅限你选择的权限。你可以随时撤销。`)
};

const ja_tokens_intro = /** @type {(inputs: Tokens_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公開 API を呼び出すときは、Authorization ヘッダーにトークンを付けて送信します。トークンはあなた自身として動作し、スタッフ権限は持たず、選んだ権限の範囲内でのみ使えます。いつでも失効できます。`)
};

/**
* | output |
* | --- |
* | "Send a token in the Authorization header when you call the public API. A token acts as you, never as staff, and only within the permissions you choose. You c..." |
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
