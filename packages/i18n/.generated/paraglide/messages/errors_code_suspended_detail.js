/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Errors_Code_Suspended_DetailInputs */

const en_errors_code_suspended_detail = /** @type {(inputs: Errors_Code_Suspended_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your account is suspended, so this action is blocked. Check your email for details or contact a ranger.`)
};

const es_errors_code_suspended_detail = /** @type {(inputs: Errors_Code_Suspended_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tu cuenta está suspendida, así que esta acción está bloqueada. Revisa tu email para ver los detalles o contacta con un guardabosques.`)
};

const de_errors_code_suspended_detail = /** @type {(inputs: Errors_Code_Suspended_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dein Konto ist gesperrt, deshalb ist diese Aktion blockiert. Details findest du in deinen E-Mails, oder wende dich an einen Ranger.`)
};

const fr_errors_code_suspended_detail = /** @type {(inputs: Errors_Code_Suspended_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votre compte est suspendu, cette action est donc bloquée. Consultez vos e-mails pour en savoir plus ou contactez un ranger.`)
};

const it_errors_code_suspended_detail = /** @type {(inputs: Errors_Code_Suspended_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il tuo account è sospeso, quindi questa azione è bloccata. Controlla la tua email per i dettagli o contatta un ranger.`)
};

const nl_errors_code_suspended_detail = /** @type {(inputs: Errors_Code_Suspended_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je account is geschorst, daarom is deze actie geblokkeerd. Bekijk je e-mail voor details of neem contact op met een ranger.`)
};

const pl_errors_code_suspended_detail = /** @type {(inputs: Errors_Code_Suspended_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twoje konto jest zawieszone, więc ta akcja jest zablokowana. Szczegóły znajdziesz w e-mailu lub u strażnika.`)
};

const pt_errors_code_suspended_detail = /** @type {(inputs: Errors_Code_Suspended_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sua conta está suspensa, então esta ação está bloqueada. Veja os detalhes no seu e-mail ou fale com um guarda.`)
};

const ru_errors_code_suspended_detail = /** @type {(inputs: Errors_Code_Suspended_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваш аккаунт временно заблокирован, поэтому действие недоступно. Подробности — в письме, или свяжитесь с рейнджером.`)
};

const sv_errors_code_suspended_detail = /** @type {(inputs: Errors_Code_Suspended_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ditt konto är avstängt, så den här åtgärden är blockerad. Se din e-post för detaljer eller kontakta en ranger.`)
};

const tr_errors_code_suspended_detail = /** @type {(inputs: Errors_Code_Suspended_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hesabın askıya alındığı için bu işlem engellendi. Ayrıntılar için e-postanı kontrol et ya da bir korucuyla iletişime geç.`)
};

const zh_errors_code_suspended_detail = /** @type {(inputs: Errors_Code_Suspended_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的账号已被停用，因此该操作被阻止。请查看邮件了解详情，或联系护林员。`)
};

const ja_errors_code_suspended_detail = /** @type {(inputs: Errors_Code_Suspended_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アカウントが停止されているため、この操作はできません。詳細はメールを確認するか、レンジャーに連絡してください。`)
};

/**
* | output |
* | --- |
* | "Your account is suspended, so this action is blocked. Check your email for details or contact a ranger." |
*
* @param {Errors_Code_Suspended_DetailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const errors_code_suspended_detail = /** @type {((inputs?: Errors_Code_Suspended_DetailInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Code_Suspended_DetailInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_errors_code_suspended_detail(inputs)
	if (locale === "de") return de_errors_code_suspended_detail(inputs)
	if (locale === "fr") return fr_errors_code_suspended_detail(inputs)
	if (locale === "it") return it_errors_code_suspended_detail(inputs)
	if (locale === "nl") return nl_errors_code_suspended_detail(inputs)
	if (locale === "pl") return pl_errors_code_suspended_detail(inputs)
	if (locale === "pt") return pt_errors_code_suspended_detail(inputs)
	if (locale === "ru") return ru_errors_code_suspended_detail(inputs)
	if (locale === "sv") return sv_errors_code_suspended_detail(inputs)
	if (locale === "tr") return tr_errors_code_suspended_detail(inputs)
	if (locale === "zh") return zh_errors_code_suspended_detail(inputs)
	if (locale === "ja") return ja_errors_code_suspended_detail(inputs)
	return en_errors_code_suspended_detail(inputs)
});
