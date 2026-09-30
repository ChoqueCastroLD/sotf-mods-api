/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_No_Permission_DetailInputs */

const en_upload_no_permission_detail = /** @type {(inputs: Upload_No_Permission_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A ranger restricted uploads for now. Check Signals for the details or contact the team.`)
};

const es_upload_no_permission_detail = /** @type {(inputs: Upload_No_Permission_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un guardabosques ha restringido las subidas por ahora. Revisa Señales para ver los detalles o contacta con el equipo.`)
};

const de_upload_no_permission_detail = /** @type {(inputs: Upload_No_Permission_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ein Ranger hat Uploads vorerst eingeschränkt. Details findest du in den Signalen, oder kontaktiere das Team.`)
};

const fr_upload_no_permission_detail = /** @type {(inputs: Upload_No_Permission_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un ranger a restreint les envois pour le moment. Consultez vos Signaux pour les détails ou contactez l’équipe.`)
};

const it_upload_no_permission_detail = /** @type {(inputs: Upload_No_Permission_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un ranger ha limitato i caricamenti per ora. Controlla i Segnali per i dettagli o contatta il team.`)
};

const nl_upload_no_permission_detail = /** @type {(inputs: Upload_No_Permission_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een ranger heeft uploads voorlopig beperkt. Bekijk je Signalen voor details of neem contact op met het team.`)
};

const pl_upload_no_permission_detail = /** @type {(inputs: Upload_No_Permission_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Strażnik tymczasowo ograniczył wysyłanie. Szczegóły znajdziesz w Sygnałach albo skontaktuj się z zespołem.`)
};

const pt_upload_no_permission_detail = /** @type {(inputs: Upload_No_Permission_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Um guarda restringiu os envios por enquanto. Veja os detalhes nos Sinais ou fale com a equipe.`)
};

const ru_upload_no_permission_detail = /** @type {(inputs: Upload_No_Permission_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Рейнджер временно ограничил загрузки. Подробности — в Сигналах, или напишите команде.`)
};

const sv_upload_no_permission_detail = /** @type {(inputs: Upload_No_Permission_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En ranger har begränsat uppladdningar tills vidare. Se Signaler för detaljer eller kontakta teamet.`)
};

const tr_upload_no_permission_detail = /** @type {(inputs: Upload_No_Permission_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir korucu yüklemeleri şimdilik kısıtladı. Ayrıntılar için Sinyaller’e bak ya da ekiple iletişime geç.`)
};

const zh_upload_no_permission_detail = /** @type {(inputs: Upload_No_Permission_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`护林员暂时限制了上传。详情请查看信号，或联系团队。`)
};

const ja_upload_no_permission_detail = /** @type {(inputs: Upload_No_Permission_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レンジャーが一時的にアップロードを制限しています。詳しくはシグナルを確認するか、チームに連絡してください。`)
};

/**
* | output |
* | --- |
* | "A ranger restricted uploads for now. Check Signals for the details or contact the team." |
*
* @param {Upload_No_Permission_DetailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_no_permission_detail = /** @type {((inputs?: Upload_No_Permission_DetailInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_No_Permission_DetailInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_no_permission_detail(inputs)
	if (locale === "de") return de_upload_no_permission_detail(inputs)
	if (locale === "fr") return fr_upload_no_permission_detail(inputs)
	if (locale === "it") return it_upload_no_permission_detail(inputs)
	if (locale === "nl") return nl_upload_no_permission_detail(inputs)
	if (locale === "pl") return pl_upload_no_permission_detail(inputs)
	if (locale === "pt") return pt_upload_no_permission_detail(inputs)
	if (locale === "ru") return ru_upload_no_permission_detail(inputs)
	if (locale === "sv") return sv_upload_no_permission_detail(inputs)
	if (locale === "tr") return tr_upload_no_permission_detail(inputs)
	if (locale === "zh") return zh_upload_no_permission_detail(inputs)
	if (locale === "ja") return ja_upload_no_permission_detail(inputs)
	return en_upload_no_permission_detail(inputs)
});
