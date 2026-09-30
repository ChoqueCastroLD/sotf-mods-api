/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Oauth_Link_Invalid_TextInputs */

const en_oauth_link_invalid_text = /** @type {(inputs: Oauth_Link_Invalid_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`It has expired or was already used. Sign in with Discord again to get a new one.`)
};

const es_oauth_link_invalid_text = /** @type {(inputs: Oauth_Link_Invalid_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ha caducado o ya se usó. Inicia sesión con Discord de nuevo para obtener uno nuevo.`)
};

const de_oauth_link_invalid_text = /** @type {(inputs: Oauth_Link_Invalid_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Er ist abgelaufen oder wurde bereits verwendet. Melde dich erneut mit Discord an, um einen neuen zu erhalten.`)
};

const fr_oauth_link_invalid_text = /** @type {(inputs: Oauth_Link_Invalid_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il a expiré ou a déjà été utilisé. Connectez-vous de nouveau avec Discord pour en obtenir un nouveau.`)
};

const it_oauth_link_invalid_text = /** @type {(inputs: Oauth_Link_Invalid_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`È scaduto o è già stato usato. Accedi di nuovo con Discord per ottenerne uno nuovo.`)
};

const nl_oauth_link_invalid_text = /** @type {(inputs: Oauth_Link_Invalid_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hij is verlopen of al gebruikt. Log opnieuw in met Discord om een nieuwe te krijgen.`)
};

const pl_oauth_link_invalid_text = /** @type {(inputs: Oauth_Link_Invalid_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wygasł lub został już użyty. Zaloguj się ponownie przez Discord, aby otrzymać nowy.`)
};

const pt_oauth_link_invalid_text = /** @type {(inputs: Oauth_Link_Invalid_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ele expirou ou já foi usado. Entre novamente com o Discord para obter um novo.`)
};

const ru_oauth_link_invalid_text = /** @type {(inputs: Oauth_Link_Invalid_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Срок его действия истёк, или он уже использован. Войдите через Discord снова, чтобы получить новую ссылку.`)
};

const sv_oauth_link_invalid_text = /** @type {(inputs: Oauth_Link_Invalid_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den har gått ut eller har redan använts. Logga in med Discord igen för att få en ny.`)
};

const tr_oauth_link_invalid_text = /** @type {(inputs: Oauth_Link_Invalid_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Süresi dolmuş ya da zaten kullanılmış. Yenisini almak için Discord ile tekrar giriş yap.`)
};

const zh_oauth_link_invalid_text = /** @type {(inputs: Oauth_Link_Invalid_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`链接已过期或已被使用。请重新使用 Discord 登录以获取新链接。`)
};

const ja_oauth_link_invalid_text = /** @type {(inputs: Oauth_Link_Invalid_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`有効期限が切れているか、既に使用されています。もう一度 Discord でサインインして新しいリンクを取得してください。`)
};

/**
* | output |
* | --- |
* | "It has expired or was already used. Sign in with Discord again to get a new one." |
*
* @param {Oauth_Link_Invalid_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const oauth_link_invalid_text = /** @type {((inputs?: Oauth_Link_Invalid_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Oauth_Link_Invalid_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_oauth_link_invalid_text(inputs)
	if (locale === "de") return de_oauth_link_invalid_text(inputs)
	if (locale === "fr") return fr_oauth_link_invalid_text(inputs)
	if (locale === "it") return it_oauth_link_invalid_text(inputs)
	if (locale === "nl") return nl_oauth_link_invalid_text(inputs)
	if (locale === "pl") return pl_oauth_link_invalid_text(inputs)
	if (locale === "pt") return pt_oauth_link_invalid_text(inputs)
	if (locale === "ru") return ru_oauth_link_invalid_text(inputs)
	if (locale === "sv") return sv_oauth_link_invalid_text(inputs)
	if (locale === "tr") return tr_oauth_link_invalid_text(inputs)
	if (locale === "zh") return zh_oauth_link_invalid_text(inputs)
	if (locale === "ja") return ja_oauth_link_invalid_text(inputs)
	return en_oauth_link_invalid_text(inputs)
});
