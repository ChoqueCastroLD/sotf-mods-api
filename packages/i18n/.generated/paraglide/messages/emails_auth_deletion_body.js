/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ when: NonNullable<unknown> }} Emails_Auth_Deletion_BodyInputs */

const en_emails_auth_deletion_body = /** @type {(inputs: Emails_Auth_Deletion_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Your account will be deleted on ${i?.when} (UTC). Until then you can cancel it from your settings and everything stays as it is.`)
};

const es_emails_auth_deletion_body = /** @type {(inputs: Emails_Auth_Deletion_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tu cuenta se borrará el ${i?.when} (UTC). Hasta entonces puedes cancelarlo desde tus ajustes y todo seguirá igual.`)
};

const de_emails_auth_deletion_body = /** @type {(inputs: Emails_Auth_Deletion_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dein Konto wird am ${i?.when} (UTC) gelöscht. Bis dahin kannst du die Löschung in deinen Einstellungen abbrechen und alles bleibt, wie es ist.`)
};

const fr_emails_auth_deletion_body = /** @type {(inputs: Emails_Auth_Deletion_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Votre compte sera supprimé le ${i?.when} (UTC). D’ici là, vous pouvez annuler depuis vos paramètres et rien ne change.`)
};

const it_emails_auth_deletion_body = /** @type {(inputs: Emails_Auth_Deletion_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Il tuo account verrà eliminato il ${i?.when} (UTC). Fino ad allora puoi annullare dalle impostazioni e tutto resta com’è.`)
};

const nl_emails_auth_deletion_body = /** @type {(inputs: Emails_Auth_Deletion_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Je account wordt verwijderd op ${i?.when} (UTC). Tot die tijd kun je het annuleren in je instellingen en blijft alles zoals het is.`)
};

const pl_emails_auth_deletion_body = /** @type {(inputs: Emails_Auth_Deletion_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Twoje konto zostanie usunięte ${i?.when} (UTC). Do tego czasu możesz to anulować w ustawieniach i wszystko zostanie bez zmian.`)
};

const pt_emails_auth_deletion_body = /** @type {(inputs: Emails_Auth_Deletion_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sua conta será excluída em ${i?.when} (UTC). Até lá, você pode cancelar nas configurações e tudo continua como está.`)
};

const ru_emails_auth_deletion_body = /** @type {(inputs: Emails_Auth_Deletion_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ваш аккаунт будет удалён ${i?.when} (UTC). До этого момента вы можете отменить удаление в настройках, и всё останется как есть.`)
};

const sv_emails_auth_deletion_body = /** @type {(inputs: Emails_Auth_Deletion_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ditt konto raderas ${i?.when} (UTC). Fram till dess kan du avbryta i inställningarna och allt förblir som det är.`)
};

const tr_emails_auth_deletion_body = /** @type {(inputs: Emails_Auth_Deletion_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Hesabın ${i?.when} (UTC) tarihinde silinecek. O zamana kadar ayarlardan iptal edebilirsin; her şey olduğu gibi kalır.`)
};

const zh_emails_auth_deletion_body = /** @type {(inputs: Emails_Auth_Deletion_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`你的账号将于 ${i?.when}（UTC）删除。在此之前，你可以在设置中取消，一切保持不变。`)
};

const ja_emails_auth_deletion_body = /** @type {(inputs: Emails_Auth_Deletion_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`アカウントは ${i?.when}（UTC）に削除されます。それまでは設定から取り消すことができ、何も変わりません。`)
};

/**
* | output |
* | --- |
* | "Your account will be deleted on {when} (UTC). Until then you can cancel it from your settings and everything stays as it is." |
*
* @param {Emails_Auth_Deletion_BodyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_auth_deletion_body = /** @type {((inputs: Emails_Auth_Deletion_BodyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Deletion_BodyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_auth_deletion_body(inputs)
	if (locale === "de") return de_emails_auth_deletion_body(inputs)
	if (locale === "fr") return fr_emails_auth_deletion_body(inputs)
	if (locale === "it") return it_emails_auth_deletion_body(inputs)
	if (locale === "nl") return nl_emails_auth_deletion_body(inputs)
	if (locale === "pl") return pl_emails_auth_deletion_body(inputs)
	if (locale === "pt") return pt_emails_auth_deletion_body(inputs)
	if (locale === "ru") return ru_emails_auth_deletion_body(inputs)
	if (locale === "sv") return sv_emails_auth_deletion_body(inputs)
	if (locale === "tr") return tr_emails_auth_deletion_body(inputs)
	if (locale === "zh") return zh_emails_auth_deletion_body(inputs)
	if (locale === "ja") return ja_emails_auth_deletion_body(inputs)
	return en_emails_auth_deletion_body(inputs)
});
