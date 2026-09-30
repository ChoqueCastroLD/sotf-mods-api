/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Tokens_Scope_Read_HintInputs */

const en_tokens_scope_read_hint = /** @type {(inputs: Tokens_Scope_Read_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`See your private data, such as your account, follows and notifications, and use read endpoints.`)
};

const es_tokens_scope_read_hint = /** @type {(inputs: Tokens_Scope_Read_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver tus datos privados, como tu cuenta, seguidos y notificaciones, y usar los endpoints de lectura.`)
};

const de_tokens_scope_read_hint = /** @type {(inputs: Tokens_Scope_Read_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deine privaten Daten wie Konto, Follows und Benachrichtigungen einsehen und Lese-Endpunkte nutzen.`)
};

const fr_tokens_scope_read_hint = /** @type {(inputs: Tokens_Scope_Read_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voir vos données privées, comme votre compte, vos abonnements et notifications, et utiliser les points d’accès en lecture.`)
};

const it_tokens_scope_read_hint = /** @type {(inputs: Tokens_Scope_Read_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vedere i tuoi dati privati, come account, seguiti e notifiche, e usare gli endpoint di lettura.`)
};

const nl_tokens_scope_read_hint = /** @type {(inputs: Tokens_Scope_Read_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je privégegevens zien, zoals account, volgend en meldingen, en leesendpoints gebruiken.`)
};

const pl_tokens_scope_read_hint = /** @type {(inputs: Tokens_Scope_Read_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wgląd w dane prywatne, takie jak konto, obserwowane i powiadomienia, oraz używanie punktów odczytu.`)
};

const pt_tokens_scope_read_hint = /** @type {(inputs: Tokens_Scope_Read_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver seus dados privados, como conta, seguidos e notificações, e usar endpoints de leitura.`)
};

const ru_tokens_scope_read_hint = /** @type {(inputs: Tokens_Scope_Read_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Просмотр личных данных (аккаунт, подписки, уведомления) и использование методов чтения.`)
};

const sv_tokens_scope_read_hint = /** @type {(inputs: Tokens_Scope_Read_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se dina privata uppgifter, som konto, följda och notiser, och använda läsanrop.`)
};

const tr_tokens_scope_read_hint = /** @type {(inputs: Tokens_Scope_Read_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hesabın, takiplerin ve bildirimlerin gibi özel verilerini görme ve okuma uç noktalarını kullanma.`)
};

const zh_tokens_scope_read_hint = /** @type {(inputs: Tokens_Scope_Read_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`查看你的私人数据（如账号、关注和通知），并使用读取接口。`)
};

const ja_tokens_scope_read_hint = /** @type {(inputs: Tokens_Scope_Read_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アカウント、フォロー、通知などの非公開データの閲覧と、読み取りエンドポイントの利用。`)
};

/**
* | output |
* | --- |
* | "See your private data, such as your account, follows and notifications, and use read endpoints." |
*
* @param {Tokens_Scope_Read_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const tokens_scope_read_hint = /** @type {((inputs?: Tokens_Scope_Read_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tokens_Scope_Read_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_tokens_scope_read_hint(inputs)
	if (locale === "de") return de_tokens_scope_read_hint(inputs)
	if (locale === "fr") return fr_tokens_scope_read_hint(inputs)
	if (locale === "it") return it_tokens_scope_read_hint(inputs)
	if (locale === "nl") return nl_tokens_scope_read_hint(inputs)
	if (locale === "pl") return pl_tokens_scope_read_hint(inputs)
	if (locale === "pt") return pt_tokens_scope_read_hint(inputs)
	if (locale === "ru") return ru_tokens_scope_read_hint(inputs)
	if (locale === "sv") return sv_tokens_scope_read_hint(inputs)
	if (locale === "tr") return tr_tokens_scope_read_hint(inputs)
	if (locale === "zh") return zh_tokens_scope_read_hint(inputs)
	if (locale === "ja") return ja_tokens_scope_read_hint(inputs)
	return en_tokens_scope_read_hint(inputs)
});
