/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Errors_Code_Forbidden_DetailInputs */

const en_errors_code_forbidden_detail = /** @type {(inputs: Errors_Code_Forbidden_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your account doesn’t have permission for this action. If you think it should, contact a moderator.`)
};

const es_errors_code_forbidden_detail = /** @type {(inputs: Errors_Code_Forbidden_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tu cuenta no tiene permiso para esta acción. Si crees que debería tenerlo, contacta con un moderador.`)
};

const de_errors_code_forbidden_detail = /** @type {(inputs: Errors_Code_Forbidden_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dein Konto hat für diese Aktion keine Berechtigung. Wenn du meinst, dass es sie haben sollte, wende dich an die Moderation.`)
};

const fr_errors_code_forbidden_detail = /** @type {(inputs: Errors_Code_Forbidden_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votre compte n’a pas l’autorisation pour cette action. Si vous pensez que c’est une erreur, contactez un modérateur.`)
};

const it_errors_code_forbidden_detail = /** @type {(inputs: Errors_Code_Forbidden_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il tuo account non ha il permesso per questa azione. Se pensi che dovrebbe averlo, contatta un moderatore.`)
};

const nl_errors_code_forbidden_detail = /** @type {(inputs: Errors_Code_Forbidden_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je account heeft geen toestemming voor deze actie. Denk je dat dat wel zou moeten, neem dan contact op met een moderator.`)
};

const pl_errors_code_forbidden_detail = /** @type {(inputs: Errors_Code_Forbidden_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twoje konto nie ma uprawnień do tej akcji. Jeśli uważasz, że powinno je mieć, skontaktuj się z moderatorem.`)
};

const pt_errors_code_forbidden_detail = /** @type {(inputs: Errors_Code_Forbidden_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sua conta não tem permissão para esta ação. Se acha que deveria ter, fale com um moderador.`)
};

const ru_errors_code_forbidden_detail = /** @type {(inputs: Errors_Code_Forbidden_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`У вашего аккаунта нет прав на это действие. Если считаете, что они должны быть, свяжитесь с модератором.`)
};

const sv_errors_code_forbidden_detail = /** @type {(inputs: Errors_Code_Forbidden_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ditt konto saknar behörighet för den här åtgärden. Om du tycker att det borde ha det, kontakta en moderator.`)
};

const tr_errors_code_forbidden_detail = /** @type {(inputs: Errors_Code_Forbidden_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hesabının bu işlem için izni yok. İzni olması gerektiğini düşünüyorsan bir moderatörle iletişime geç.`)
};

const zh_errors_code_forbidden_detail = /** @type {(inputs: Errors_Code_Forbidden_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的账号没有执行此操作的权限。如果你认为应该有，请联系版主。`)
};

const ja_errors_code_forbidden_detail = /** @type {(inputs: Errors_Code_Forbidden_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`あなたのアカウントにはこの操作の権限がありません。必要な場合はモデレーターに連絡してください。`)
};

/**
* | output |
* | --- |
* | "Your account doesn’t have permission for this action. If you think it should, contact a moderator." |
*
* @param {Errors_Code_Forbidden_DetailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const errors_code_forbidden_detail = /** @type {((inputs?: Errors_Code_Forbidden_DetailInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Code_Forbidden_DetailInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_errors_code_forbidden_detail(inputs)
	if (locale === "de") return de_errors_code_forbidden_detail(inputs)
	if (locale === "fr") return fr_errors_code_forbidden_detail(inputs)
	if (locale === "it") return it_errors_code_forbidden_detail(inputs)
	if (locale === "nl") return nl_errors_code_forbidden_detail(inputs)
	if (locale === "pl") return pl_errors_code_forbidden_detail(inputs)
	if (locale === "pt") return pt_errors_code_forbidden_detail(inputs)
	if (locale === "ru") return ru_errors_code_forbidden_detail(inputs)
	if (locale === "sv") return sv_errors_code_forbidden_detail(inputs)
	if (locale === "tr") return tr_errors_code_forbidden_detail(inputs)
	if (locale === "zh") return zh_errors_code_forbidden_detail(inputs)
	if (locale === "ja") return ja_errors_code_forbidden_detail(inputs)
	return en_errors_code_forbidden_detail(inputs)
});
