/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Emails_Auth_Deleted_BodyInputs */

const en_emails_auth_deleted_body = /** @type {(inputs: Emails_Auth_Deleted_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your personal data has been erased. Comments and reviews remain under “Deleted user”. Thank you for being part of SOTF Mods.`)
};

const es_emails_auth_deleted_body = /** @type {(inputs: Emails_Auth_Deleted_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tus datos personales se han eliminado. Los comentarios y reseñas quedan como «Usuario eliminado». Gracias por haber formado parte de SOTF Mods.`)
};

const de_emails_auth_deleted_body = /** @type {(inputs: Emails_Auth_Deleted_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deine persönlichen Daten wurden gelöscht. Kommentare und Bewertungen bleiben als „Gelöschter Nutzer“ erhalten. Danke, dass du Teil von SOTF Mods warst.`)
};

const fr_emails_auth_deleted_body = /** @type {(inputs: Emails_Auth_Deleted_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vos données personnelles ont été effacées. Les commentaires et avis restent sous « Utilisateur supprimé ». Merci d’avoir fait partie de SOTF Mods.`)
};

const it_emails_auth_deleted_body = /** @type {(inputs: Emails_Auth_Deleted_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I tuoi dati personali sono stati cancellati. Commenti e recensioni restano come «Utente eliminato». Grazie per aver fatto parte di SOTF Mods.`)
};

const nl_emails_auth_deleted_body = /** @type {(inputs: Emails_Auth_Deleted_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je persoonsgegevens zijn gewist. Reacties en recensies blijven staan als ‘Verwijderde gebruiker’. Bedankt dat je deel uitmaakte van SOTF Mods.`)
};

const pl_emails_auth_deleted_body = /** @type {(inputs: Emails_Auth_Deleted_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twoje dane osobowe zostały usunięte. Komentarze i recenzje pozostają jako „Usunięty użytkownik”. Dziękujemy za bycie częścią SOTF Mods.`)
};

const pt_emails_auth_deleted_body = /** @type {(inputs: Emails_Auth_Deleted_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seus dados pessoais foram apagados. Comentários e avaliações continuam como “Usuário excluído”. Obrigado por fazer parte do SOTF Mods.`)
};

const ru_emails_auth_deleted_body = /** @type {(inputs: Emails_Auth_Deleted_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваши персональные данные стёрты. Комментарии и отзывы остаются под именем «Удалённый пользователь». Спасибо, что были с SOTF Mods.`)
};

const sv_emails_auth_deleted_body = /** @type {(inputs: Emails_Auth_Deleted_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dina personuppgifter har raderats. Kommentarer och recensioner finns kvar som ”Raderad användare”. Tack för att du var en del av SOTF Mods.`)
};

const tr_emails_auth_deleted_body = /** @type {(inputs: Emails_Auth_Deleted_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kişisel verilerin silindi. Yorumlar ve incelemeler “Silinmiş kullanıcı” olarak kalır. SOTF Mods’un bir parçası olduğun için teşekkürler.`)
};

const zh_emails_auth_deleted_body = /** @type {(inputs: Emails_Auth_Deleted_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的个人数据已被清除。评论和评价将以“已注销的用户”的名义保留。感谢你使用 SOTF Mods。`)
};

const ja_emails_auth_deleted_body = /** @type {(inputs: Emails_Auth_Deleted_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`個人データは消去されました。コメントとレビューは「削除されたユーザー」として残ります。SOTF Mods をご利用いただきありがとうございました。`)
};

/**
* | output |
* | --- |
* | "Your personal data has been erased. Comments and reviews remain under “Deleted user”. Thank you for being part of SOTF Mods." |
*
* @param {Emails_Auth_Deleted_BodyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_auth_deleted_body = /** @type {((inputs?: Emails_Auth_Deleted_BodyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Deleted_BodyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_auth_deleted_body(inputs)
	if (locale === "de") return de_emails_auth_deleted_body(inputs)
	if (locale === "fr") return fr_emails_auth_deleted_body(inputs)
	if (locale === "it") return it_emails_auth_deleted_body(inputs)
	if (locale === "nl") return nl_emails_auth_deleted_body(inputs)
	if (locale === "pl") return pl_emails_auth_deleted_body(inputs)
	if (locale === "pt") return pt_emails_auth_deleted_body(inputs)
	if (locale === "ru") return ru_emails_auth_deleted_body(inputs)
	if (locale === "sv") return sv_emails_auth_deleted_body(inputs)
	if (locale === "tr") return tr_emails_auth_deleted_body(inputs)
	if (locale === "zh") return zh_emails_auth_deleted_body(inputs)
	if (locale === "ja") return ja_emails_auth_deleted_body(inputs)
	return en_emails_auth_deleted_body(inputs)
});
