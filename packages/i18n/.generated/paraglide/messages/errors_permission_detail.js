/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Errors_Permission_DetailInputs */

const en_errors_permission_detail = /** @type {(inputs: Errors_Permission_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You need a different role to open this page. Go back or log in with another account.`)
};

const es_errors_permission_detail = /** @type {(inputs: Errors_Permission_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Necesitas otro rol para abrir esta página. Vuelve atrás o inicia sesión con otra cuenta.`)
};

const de_errors_permission_detail = /** @type {(inputs: Errors_Permission_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du brauchst eine andere Rolle, um diese Seite zu öffnen. Geh zurück oder melde dich mit einem anderen Konto an.`)
};

const fr_errors_permission_detail = /** @type {(inputs: Errors_Permission_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il vous faut un autre rôle pour ouvrir cette page. Revenez en arrière ou connectez-vous avec un autre compte.`)
};

const it_errors_permission_detail = /** @type {(inputs: Errors_Permission_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ti serve un ruolo diverso per aprire questa pagina. Torna indietro o accedi con un altro account.`)
};

const nl_errors_permission_detail = /** @type {(inputs: Errors_Permission_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je hebt een andere rol nodig om deze pagina te openen. Ga terug of log in met een ander account.`)
};

const pl_errors_permission_detail = /** @type {(inputs: Errors_Permission_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aby otworzyć tę stronę, potrzebujesz innej roli. Wróć albo zaloguj się na inne konto.`)
};

const pt_errors_permission_detail = /** @type {(inputs: Errors_Permission_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você precisa de outra função para abrir esta página. Volte ou entre com outra conta.`)
};

const ru_errors_permission_detail = /** @type {(inputs: Errors_Permission_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Чтобы открыть эту страницу, нужна другая роль. Вернитесь назад или войдите в другой аккаунт.`)
};

const sv_errors_permission_detail = /** @type {(inputs: Errors_Permission_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du behöver en annan roll för att öppna den här sidan. Gå tillbaka eller logga in med ett annat konto.`)
};

const tr_errors_permission_detail = /** @type {(inputs: Errors_Permission_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu sayfayı açmak için farklı bir role ihtiyacın var. Geri dön ya da başka bir hesapla giriş yap.`)
};

const zh_errors_permission_detail = /** @type {(inputs: Errors_Permission_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你需要其他角色才能打开此页面。请返回，或使用其他账号登录。`)
};

const ja_errors_permission_detail = /** @type {(inputs: Errors_Permission_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このページを開くには別の権限が必要です。前のページに戻るか、別のアカウントでログインしてください。`)
};

/**
* | output |
* | --- |
* | "You need a different role to open this page. Go back or log in with another account." |
*
* @param {Errors_Permission_DetailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const errors_permission_detail = /** @type {((inputs?: Errors_Permission_DetailInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Permission_DetailInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_errors_permission_detail(inputs)
	if (locale === "de") return de_errors_permission_detail(inputs)
	if (locale === "fr") return fr_errors_permission_detail(inputs)
	if (locale === "it") return it_errors_permission_detail(inputs)
	if (locale === "nl") return nl_errors_permission_detail(inputs)
	if (locale === "pl") return pl_errors_permission_detail(inputs)
	if (locale === "pt") return pt_errors_permission_detail(inputs)
	if (locale === "ru") return ru_errors_permission_detail(inputs)
	if (locale === "sv") return sv_errors_permission_detail(inputs)
	if (locale === "tr") return tr_errors_permission_detail(inputs)
	if (locale === "zh") return zh_errors_permission_detail(inputs)
	if (locale === "ja") return ja_errors_permission_detail(inputs)
	return en_errors_permission_detail(inputs)
});
